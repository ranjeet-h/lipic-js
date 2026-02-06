use crate::{RuleOptionsInput, TransliterationEntry};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use thiserror::Error;

const MAGIC: [u8; 4] = *b"LIP1";
const SCHEMA_VERSION: u16 = 1;
const BASE_LANGUAGE_ID: &str = "__script_base__";

#[derive(Clone, Debug, Deserialize, Serialize, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub enum LanguagePackKind {
    Full,
    ScriptBase,
    LanguageOverlay,
}

#[derive(Debug, Error)]
pub enum LanguagePackError {
    #[error("invalid language-pack magic header")]
    InvalidMagic,
    #[error("unsupported language-pack schema version: {0}")]
    UnsupportedVersion(u16),
    #[error("invalid language-pack payload size")]
    InvalidSize,
    #[error("language-pack parse error: {0}")]
    Parse(String),
    #[error("pack kind mismatch: expected {expected:?}, found {found:?}")]
    PackKindMismatch {
        expected: LanguagePackKind,
        found: LanguagePackKind,
    },
    #[error("script mismatch between packs")]
    ScriptMismatch,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct LanguagePackHeader {
    pub schema_version: u16,
    pub kind: LanguagePackKind,
    pub script_id: String,
    pub language_id: String,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct LanguagePackBody {
    pub expanded_map: HashMap<String, TransliterationEntry>,
    pub rules: Option<RuleOptionsInput>,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct LanguagePackDecoded {
    pub header: LanguagePackHeader,
    pub body: LanguagePackBody,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct LanguagePackSummary {
    pub schema_version: u16,
    pub kind: LanguagePackKind,
    pub script_id: String,
    pub language_id: String,
    pub entries: usize,
    pub has_rules: bool,
}

pub fn compile_pack(
    expanded_map: HashMap<String, TransliterationEntry>,
    script_id: String,
    language_id: String,
    rules: Option<RuleOptionsInput>,
) -> Result<Vec<u8>, LanguagePackError> {
    encode(
        LanguagePackHeader {
            schema_version: SCHEMA_VERSION,
            kind: LanguagePackKind::Full,
            script_id,
            language_id,
        },
        LanguagePackBody {
            expanded_map,
            rules,
        },
    )
}

pub fn compile_script_base_pack(
    expanded_map: HashMap<String, TransliterationEntry>,
    script_id: String,
) -> Result<Vec<u8>, LanguagePackError> {
    encode(
        LanguagePackHeader {
            schema_version: SCHEMA_VERSION,
            kind: LanguagePackKind::ScriptBase,
            script_id,
            language_id: BASE_LANGUAGE_ID.to_owned(),
        },
        LanguagePackBody {
            expanded_map,
            rules: None,
        },
    )
}

pub fn compile_language_overlay_pack(
    expanded_map: HashMap<String, TransliterationEntry>,
    script_id: String,
    language_id: String,
    rules: Option<RuleOptionsInput>,
) -> Result<Vec<u8>, LanguagePackError> {
    encode(
        LanguagePackHeader {
            schema_version: SCHEMA_VERSION,
            kind: LanguagePackKind::LanguageOverlay,
            script_id,
            language_id,
        },
        LanguagePackBody {
            expanded_map,
            rules,
        },
    )
}

pub fn merge_base_overlay_packs(
    base_pack: &[u8],
    overlay_pack: &[u8],
) -> Result<LanguagePackDecoded, LanguagePackError> {
    let base = decode_pack(base_pack)?;
    if base.header.kind != LanguagePackKind::ScriptBase {
        return Err(LanguagePackError::PackKindMismatch {
            expected: LanguagePackKind::ScriptBase,
            found: base.header.kind,
        });
    }

    let overlay = decode_pack(overlay_pack)?;
    if overlay.header.kind != LanguagePackKind::LanguageOverlay {
        return Err(LanguagePackError::PackKindMismatch {
            expected: LanguagePackKind::LanguageOverlay,
            found: overlay.header.kind,
        });
    }

    if base.header.script_id != overlay.header.script_id {
        return Err(LanguagePackError::ScriptMismatch);
    }

    let mut merged_map = base.body.expanded_map;
    for (key, value) in overlay.body.expanded_map {
        merged_map.insert(key, value);
    }

    Ok(LanguagePackDecoded {
        header: LanguagePackHeader {
            schema_version: SCHEMA_VERSION,
            kind: LanguagePackKind::Full,
            script_id: overlay.header.script_id,
            language_id: overlay.header.language_id,
        },
        body: LanguagePackBody {
            expanded_map: merged_map,
            rules: overlay.body.rules.or(base.body.rules),
        },
    })
}

pub fn merge_base_overlay_as_full_pack(
    base_pack: &[u8],
    overlay_pack: &[u8],
) -> Result<Vec<u8>, LanguagePackError> {
    let merged = merge_base_overlay_packs(base_pack, overlay_pack)?;
    encode(merged.header, merged.body)
}

pub fn decode_pack(bytes: &[u8]) -> Result<LanguagePackDecoded, LanguagePackError> {
    if bytes.len() < 14 {
        return Err(LanguagePackError::InvalidSize);
    }
    if bytes[0..4] != MAGIC {
        return Err(LanguagePackError::InvalidMagic);
    }

    let version = u16::from_le_bytes([bytes[4], bytes[5]]);
    if version != SCHEMA_VERSION {
        return Err(LanguagePackError::UnsupportedVersion(version));
    }

    let header_len = u32::from_le_bytes([bytes[6], bytes[7], bytes[8], bytes[9]]) as usize;
    let body_len = u32::from_le_bytes([bytes[10], bytes[11], bytes[12], bytes[13]]) as usize;
    let header_start = 14usize;
    let header_end = header_start.saturating_add(header_len);
    let body_end = header_end.saturating_add(body_len);

    if body_end != bytes.len() || header_end > bytes.len() {
        return Err(LanguagePackError::InvalidSize);
    }

    let header: LanguagePackHeader = serde_json::from_slice(&bytes[header_start..header_end])
        .map_err(|e| LanguagePackError::Parse(e.to_string()))?;
    let body: LanguagePackBody = serde_json::from_slice(&bytes[header_end..body_end])
        .map_err(|e| LanguagePackError::Parse(e.to_string()))?;

    Ok(LanguagePackDecoded { header, body })
}

pub fn summarize_pack(bytes: &[u8]) -> Result<LanguagePackSummary, LanguagePackError> {
    let decoded = decode_pack(bytes)?;
    Ok(LanguagePackSummary {
        schema_version: decoded.header.schema_version,
        kind: decoded.header.kind,
        script_id: decoded.header.script_id,
        language_id: decoded.header.language_id,
        entries: decoded.body.expanded_map.len(),
        has_rules: decoded.body.rules.is_some(),
    })
}

fn encode(
    header: LanguagePackHeader,
    body: LanguagePackBody,
) -> Result<Vec<u8>, LanguagePackError> {
    let header_bytes =
        serde_json::to_vec(&header).map_err(|e| LanguagePackError::Parse(e.to_string()))?;
    let body_bytes =
        serde_json::to_vec(&body).map_err(|e| LanguagePackError::Parse(e.to_string()))?;

    let mut out = Vec::with_capacity(14 + header_bytes.len() + body_bytes.len());
    out.extend_from_slice(&MAGIC);
    out.extend_from_slice(&SCHEMA_VERSION.to_le_bytes());
    out.extend_from_slice(&(header_bytes.len() as u32).to_le_bytes());
    out.extend_from_slice(&(body_bytes.len() as u32).to_le_bytes());
    out.extend_from_slice(&header_bytes);
    out.extend_from_slice(&body_bytes);
    Ok(out)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn round_trip_pack() {
        let mut map = HashMap::new();
        map.insert(
            "k".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "क".to_owned(),
                matra: None,
            },
        );

        let bytes = compile_pack(
            map.clone(),
            "devanagari".to_owned(),
            "marathi".to_owned(),
            None,
        )
        .expect("compile should work");
        let decoded = decode_pack(&bytes).expect("decode should work");

        assert_eq!(decoded.header.schema_version, 1);
        assert_eq!(decoded.header.kind, LanguagePackKind::Full);
        assert_eq!(decoded.header.script_id, "devanagari");
        assert_eq!(decoded.header.language_id, "marathi");
        assert_eq!(decoded.body.expanded_map.len(), 1);
        assert_eq!(decoded.body.expanded_map.get("k"), map.get("k"));
    }

    #[test]
    fn merge_base_and_overlay() {
        let mut base_map = HashMap::new();
        base_map.insert(
            "k".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "क".to_owned(),
                matra: None,
            },
        );
        let base_bytes =
            compile_script_base_pack(base_map, "devanagari".to_owned()).expect("base pack");

        let mut overlay_map = HashMap::new();
        overlay_map.insert(
            "z".to_owned(),
            TransliterationEntry {
                entry_type: "raw".to_owned(),
                glyph: "z".to_owned(),
                matra: None,
            },
        );
        let overlay_bytes = compile_language_overlay_pack(
            overlay_map,
            "devanagari".to_owned(),
            "marathi".to_owned(),
            None,
        )
        .expect("overlay pack");

        let merged = merge_base_overlay_packs(&base_bytes, &overlay_bytes).expect("merged");
        assert_eq!(merged.header.kind, LanguagePackKind::Full);
        assert_eq!(merged.header.language_id, "marathi");
        assert!(merged.body.expanded_map.contains_key("k"));
        assert!(merged.body.expanded_map.contains_key("z"));
    }

    #[test]
    fn invalid_magic_is_rejected() {
        let bytes = vec![0_u8; 20];
        let result = decode_pack(&bytes);
        assert!(matches!(result, Err(LanguagePackError::InvalidMagic)));
    }
}
