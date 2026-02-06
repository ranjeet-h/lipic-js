mod language_pack;
mod trie;

use hashbrown::HashMap;
use serde::{Deserialize, Serialize};
use std::collections::HashMap as StdHashMap;
use trie::TrieNode;
use wasm_bindgen::prelude::*;

const HALANT: &str = "्";
const ANUSVARA: &str = "ं";

#[derive(Clone, Debug, Deserialize, Serialize, PartialEq, Eq)]
pub(crate) struct TransliterationEntry {
    #[serde(rename = "type")]
    entry_type: String,
    glyph: String,
    #[serde(default)]
    matra: Option<String>,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub(crate) struct RuleOptionsInput {
    enable_nukta: Option<bool>,
    nasalization_mode: Option<NasalizationMode>,
    enable_ligature_collapse: Option<bool>,
    enable_schwa_deletion: Option<bool>,
}

#[derive(Clone, Debug, Deserialize, Serialize, PartialEq, Eq)]
#[serde(rename_all = "lowercase")]
pub(crate) enum NasalizationMode {
    Anusvara,
    Panchamakshar,
}

#[derive(Clone, Debug)]
struct RuleOptions {
    enable_nukta: bool,
    nasalization_mode: NasalizationMode,
    enable_ligature_collapse: bool,
    enable_schwa_deletion: bool,
}

impl Default for RuleOptions {
    fn default() -> Self {
        Self {
            enable_nukta: true,
            nasalization_mode: NasalizationMode::Anusvara,
            enable_ligature_collapse: true,
            enable_schwa_deletion: true,
        }
    }
}

impl RuleOptions {
    fn from_js_value(rules: Option<JsValue>) -> Result<Self, JsValue> {
        let input = parse_rule_options_input(rules)?;
        Ok(Self::from_input(input))
    }

    fn from_input(input: Option<RuleOptionsInput>) -> Self {
        let default = Self::default();
        let Some(input) = input else {
            return default;
        };
        Self {
            enable_nukta: input.enable_nukta.unwrap_or(default.enable_nukta),
            nasalization_mode: input.nasalization_mode.unwrap_or(default.nasalization_mode),
            enable_ligature_collapse: input
                .enable_ligature_collapse
                .unwrap_or(default.enable_ligature_collapse),
            enable_schwa_deletion: input
                .enable_schwa_deletion
                .unwrap_or(default.enable_schwa_deletion),
        }
    }
}

#[derive(Serialize)]
struct Edit {
    backspace: usize,
    insert: String,
}

#[derive(Serialize)]
struct JsLongestMatchResult {
    #[serde(rename = "isPrefix")]
    is_prefix: bool,
    matched: bool,
    key: String,
    value: Option<serde_json::Value>,
    length: usize,
}

#[derive(Clone, Debug)]
enum ContextState {
    Start,
    AfterConsonant,
    AfterVowel,
    Other,
}

#[derive(Clone, Debug, PartialEq, Eq)]
enum Token {
    InherentA,
    VowelIndependent(String),
    Matra(String),
    Consonant(String),
    Mark(String),
    Raw(String),
    Halant(String),
}

#[wasm_bindgen]
pub struct Engine {
    input_buffer: String,
    rendered_buffer: String,
    rendered_len: usize,
    trie: TrieNode<TransliterationEntry>,
    rule_options: RuleOptions,
}

#[wasm_bindgen]
pub struct WasmTrie {
    root: TrieNode<serde_json::Value>,
}

#[wasm_bindgen]
impl Engine {
    #[wasm_bindgen(constructor)]
    pub fn new(expanded_map: JsValue, rules: Option<JsValue>) -> Result<Self, JsValue> {
        let map: StdHashMap<String, TransliterationEntry> =
            serde_wasm_bindgen::from_value(expanded_map).map_err(to_js_error)?;
        let map: HashMap<String, TransliterationEntry> = map.into_iter().collect();

        Ok(Self {
            input_buffer: String::new(),
            rendered_buffer: String::new(),
            rendered_len: 0,
            trie: trie::build_trie(&map),
            rule_options: RuleOptions::from_js_value(rules)?,
        })
    }

    pub fn process_char(&mut self, ch: &str) -> Result<JsValue, JsValue> {
        if is_separator(ch) {
            self.input_buffer.clear();
            self.rendered_buffer.clear();
            self.rendered_len = 0;
            return to_js_edit(Edit {
                backspace: 0,
                insert: ch.to_owned(),
            });
        }

        self.input_buffer.push_str(ch);
        self.rewrite_from_current_input()
    }

    pub fn process_text(&mut self, text: &str) -> Result<JsValue, JsValue> {
        self.input_buffer.clear();

        let previous_len = self.rendered_len;
        let chunks = split_with_separators(text);
        let mut out = String::new();

        for chunk in chunks {
            if chunk.is_empty() {
                continue;
            }

            if is_separator_chunk(&chunk) {
                out.push_str(&chunk);
            } else {
                out.push_str(&compute_rendered(&chunk, &self.trie, &self.rule_options));
            }
        }

        self.rendered_len = out.chars().count();
        self.rendered_buffer = out.clone();
        to_js_edit(Edit {
            backspace: previous_len,
            insert: out,
        })
    }

    pub fn backspace(&mut self) -> Result<JsValue, JsValue> {
        if self.input_buffer.is_empty() {
            return to_js_edit(Edit {
                backspace: 0,
                insert: String::new(),
            });
        }

        self.input_buffer.pop();
        self.rewrite_from_current_input()
    }

    pub fn commit(&mut self) -> Result<JsValue, JsValue> {
        if self.input_buffer.is_empty() {
            return to_js_edit(Edit {
                backspace: 0,
                insert: String::new(),
            });
        }

        self.input_buffer.clear();
        self.rendered_buffer.clear();
        self.rendered_len = 0;
        to_js_edit(Edit {
            backspace: 0,
            insert: String::new(),
        })
    }

    pub fn reset(&mut self) {
        self.input_buffer.clear();
        self.rendered_buffer.clear();
        self.rendered_len = 0;
    }

    #[wasm_bindgen(js_name = fromLanguagePack)]
    pub fn from_language_pack(pack_bytes: &[u8]) -> Result<Self, JsValue> {
        let decoded = language_pack::decode_pack(pack_bytes).map_err(to_js_error)?;
        let pack_map: HashMap<String, TransliterationEntry> =
            decoded.body.expanded_map.into_iter().collect();
        Ok(Self {
            input_buffer: String::new(),
            rendered_buffer: String::new(),
            rendered_len: 0,
            trie: trie::build_trie(&pack_map),
            rule_options: RuleOptions::from_input(decoded.body.rules),
        })
    }

    #[wasm_bindgen(js_name = fromLanguagePacks)]
    pub fn from_language_packs(
        base_pack_bytes: &[u8],
        overlay_pack_bytes: &[u8],
    ) -> Result<Self, JsValue> {
        let merged = language_pack::merge_base_overlay_packs(base_pack_bytes, overlay_pack_bytes)
            .map_err(to_js_error)?;
        let pack_map: HashMap<String, TransliterationEntry> =
            merged.body.expanded_map.into_iter().collect();
        Ok(Self {
            input_buffer: String::new(),
            rendered_buffer: String::new(),
            rendered_len: 0,
            trie: trie::build_trie(&pack_map),
            rule_options: RuleOptions::from_input(merged.body.rules),
        })
    }
}

#[wasm_bindgen]
impl WasmTrie {
    #[wasm_bindgen(constructor)]
    pub fn new(expanded_map: JsValue) -> Result<Self, JsValue> {
        let map: StdHashMap<String, serde_json::Value> =
            serde_wasm_bindgen::from_value(expanded_map).map_err(to_js_error)?;
        let map: HashMap<String, serde_json::Value> = map.into_iter().collect();
        Ok(Self {
            root: trie::build_trie(&map),
        })
    }

    pub fn walk_longest(&self, input: &str, start_index: usize) -> Result<JsValue, JsValue> {
        let result = trie::walk_longest(&self.root, input, start_index);
        let js_result = JsLongestMatchResult {
            is_prefix: result.is_prefix,
            matched: result.matched,
            key: result.key,
            value: result.value,
            length: result.length,
        };
        serde_wasm_bindgen::to_value(&js_result).map_err(to_js_error)
    }
}

impl Engine {
    fn rewrite_from_current_input(&mut self) -> Result<JsValue, JsValue> {
        let next_rendered = compute_rendered(&self.input_buffer, &self.trie, &self.rule_options);
        let edit = Edit {
            backspace: self.rendered_len,
            insert: next_rendered.clone(),
        };
        self.rendered_len = next_rendered.chars().count();
        self.rendered_buffer = next_rendered;
        to_js_edit(edit)
    }
}

fn is_separator_char(c: char) -> bool {
    c.is_whitespace() || ".,!?;:()[]{}\"'-".contains(c)
}

fn is_separator(input: &str) -> bool {
    input.chars().any(is_separator_char)
}

fn is_separator_chunk(chunk: &str) -> bool {
    !chunk.is_empty() && chunk.chars().all(is_separator_char)
}

fn split_with_separators(text: &str) -> Vec<String> {
    let mut chunks = Vec::new();
    let mut current = String::new();
    let mut in_separator = None::<bool>;

    for ch in text.chars() {
        let now_separator = is_separator_char(ch);
        match in_separator {
            Some(state) if state == now_separator => current.push(ch),
            Some(_) => {
                chunks.push(current);
                current = String::new();
                current.push(ch);
                in_separator = Some(now_separator);
            }
            None => {
                current.push(ch);
                in_separator = Some(now_separator);
            }
        }
    }

    if !current.is_empty() {
        chunks.push(current);
    }

    chunks
}

fn next_context_for_raw_char(ch: char) -> ContextState {
    if ch.is_whitespace() {
        ContextState::Start
    } else {
        ContextState::Other
    }
}

fn render_entry_to_tokens(
    entry: &TransliterationEntry,
    context: ContextState,
) -> (Vec<Token>, ContextState) {
    if entry.entry_type == "vowel" {
        if matches!(context, ContextState::AfterConsonant) {
            if entry.matra.clone().unwrap_or_default().is_empty() {
                return (vec![Token::InherentA], ContextState::AfterVowel);
            }
            return (
                vec![Token::Matra(entry.matra.clone().unwrap_or_default())],
                ContextState::AfterVowel,
            );
        }

        return (
            vec![Token::VowelIndependent(entry.glyph.clone())],
            ContextState::AfterVowel,
        );
    }

    if entry.entry_type == "consonant" || entry.entry_type == "conjunct" {
        return (
            vec![Token::Consonant(entry.glyph.clone())],
            ContextState::AfterConsonant,
        );
    }

    if entry.entry_type == "mark" {
        return (vec![Token::Mark(entry.glyph.clone())], context);
    }

    (vec![Token::Raw(entry.glyph.clone())], context)
}

fn is_consonant_token(token: &Token) -> bool {
    matches!(token, Token::Consonant(_))
}

fn insert_halants(tokens: &[Token]) -> Vec<Token> {
    let mut out = Vec::with_capacity(tokens.len().saturating_mul(2));

    for i in 0..tokens.len() {
        let current = tokens[i].clone();
        let next = tokens.get(i + 1);
        out.push(current.clone());

        if !is_consonant_token(&current) {
            continue;
        }

        if next.is_some_and(is_consonant_token) {
            out.push(Token::Halant(HALANT.to_owned()));
        }
    }

    out
}

fn is_ng_split_vowel(ch: char) -> bool {
    matches!(
        ch,
        'a' | 'A' | 'i' | 'I' | 'u' | 'U' | 'e' | 'E' | 'o' | 'O' | 'ā' | 'ī' | 'ū'
    )
}

fn tokenize_buffer(buffer: &str, trie: &TrieNode<TransliterationEntry>) -> Vec<Token> {
    let mut raw_tokens = Vec::with_capacity(buffer.len().saturating_mul(2));
    let mut index = 0usize;
    let total_chars = buffer.chars().count();
    let mut context = ContextState::Start;
    let chars: Vec<char> = buffer.chars().collect();

    while index < total_chars {
        let match_result = trie::walk_longest_chars_value(trie, &chars, index);
        if match_result.matched {
            if let Some(entry_value) = match_result.value {
                let next_ch = chars.get(index + match_result.length).copied();
                let should_split_ng = match_result.length == 2
                    && chars.get(index) == Some(&'n')
                    && chars.get(index + 1) == Some(&'g')
                    && next_ch.is_some_and(is_ng_split_vowel);

                if should_split_ng {
                    let n_chars = ['n'];
                    let n_match = trie::walk_longest_chars(trie, &n_chars, 0);
                    if n_match.matched {
                        if let Some(n_entry) = n_match.value {
                            let (rendered, next_context) =
                                render_entry_to_tokens(&n_entry, context);
                            raw_tokens.extend(rendered);
                            context = next_context;
                            index += 1;
                            continue;
                        }
                    }
                }

                let (rendered, next_context) = render_entry_to_tokens(&entry_value, context);
                raw_tokens.extend(rendered);
                context = next_context;
                index += match_result.length;
                continue;
            }
        }

        if let Some(raw) = chars.get(index).copied() {
            raw_tokens.push(Token::Raw(raw.to_string()));
            context = next_context_for_raw_char(raw);
            index += 1;
        } else {
            break;
        }
    }

    insert_halants(&raw_tokens)
}

fn is_raw(token: Option<&Token>, text: &str) -> bool {
    matches!(token, Some(Token::Raw(t)) if t == text)
}

fn is_consonant(token: Option<&Token>, glyph: &str) -> bool {
    matches!(token, Some(Token::Consonant(g)) if g == glyph)
}

fn is_independent_a(token: Option<&Token>) -> bool {
    matches!(token, Some(Token::VowelIndependent(g)) if g == "अ")
}

fn push_with_optional_akar(
    out: &mut Vec<Token>,
    consonant_glyph: &str,
    next: Option<&Token>,
) -> bool {
    out.push(Token::Consonant(consonant_glyph.to_owned()));
    if is_independent_a(next) {
        out.push(Token::Matra("ा".to_owned()));
        return true;
    }
    false
}

fn apply_nukta_rule_into(tokens: &[Token], out: &mut Vec<Token>) {
    out.clear();
    out.reserve(tokens.len());
    let mut i = 0usize;

    while i < tokens.len() {
        let current = tokens.get(i);
        let next = tokens.get(i + 1);

        if is_consonant(current, "क") && is_raw(next, "*") {
            let next_after_star = tokens.get(i + 2);
            let consumed_a = push_with_optional_akar(out, "क़", next_after_star);
            i += if consumed_a { 3 } else { 2 };
            continue;
        }

        if is_consonant(current, "ग") && is_raw(next, "*") {
            let next_after_star = tokens.get(i + 2);
            let consumed_a = push_with_optional_akar(out, "ग़", next_after_star);
            i += if consumed_a { 3 } else { 2 };
            continue;
        }

        if is_raw(current, "q") {
            let consumed_a = push_with_optional_akar(out, "क़", next);
            i += if consumed_a { 2 } else { 1 };
            continue;
        }

        if is_raw(current, "f") {
            let consumed_a = push_with_optional_akar(out, "फ़", next);
            i += if consumed_a { 2 } else { 1 };
            continue;
        }

        out.push(tokens[i].clone());
        i += 1;
    }
}

fn mapped_panchama(target: &str) -> Option<&'static str> {
    if ["क", "ख", "ग", "घ"].contains(&target) {
        return Some("ङ");
    }
    if ["च", "छ", "ज", "झ"].contains(&target) {
        return Some("ञ");
    }
    if ["ट", "ठ", "ड", "ढ"].contains(&target) {
        return Some("ण");
    }
    if ["त", "थ", "द", "ध"].contains(&target) {
        return Some("न");
    }
    if ["प", "फ", "ब", "भ"].contains(&target) {
        return Some("म");
    }
    None
}

fn apply_nasalization_rule_into(tokens: &[Token], options: &RuleOptions, out: &mut Vec<Token>) {
    out.clear();
    out.reserve(tokens.len());
    let mut i = 0usize;

    while i < tokens.len() {
        let t0 = tokens.get(i);
        let t1 = tokens.get(i + 1);
        let t2 = tokens.get(i + 2);

        let is_nasal_cluster = matches!(t0, Some(Token::Consonant(g)) if ["ङ", "ञ", "ण", "न", "म"].contains(&g.as_str()))
            && matches!(t1, Some(Token::Halant(_)))
            && matches!(t2, Some(Token::Consonant(_)));

        if !is_nasal_cluster {
            out.push(tokens[i].clone());
            i += 1;
            continue;
        }

        if options.nasalization_mode == NasalizationMode::Anusvara {
            out.push(Token::Mark(ANUSVARA.to_owned()));
            i += 2;
            continue;
        }

        if let Some(Token::Consonant(next_consonant)) = t2 {
            if let Some(mapped) = mapped_panchama(next_consonant) {
                out.push(Token::Consonant(mapped.to_owned()));
                i += 1;
                continue;
            }
        }

        out.push(tokens[i].clone());
        i += 1;
    }
}

fn ligature_for_pair(left: &str, right: &str) -> Option<&'static str> {
    if left == "क" && (right == "ष" || right == "श") {
        return Some("क्ष");
    }
    if left == "ज" && right == "ञ" {
        return Some("ज्ञ");
    }
    if left == "त" && right == "य" {
        return Some("त्य");
    }
    if left == "ग" && right == "य" {
        return Some("ज्ञ");
    }
    None
}

fn apply_ligature_rule_into(tokens: &[Token], out: &mut Vec<Token>) {
    out.clear();
    out.reserve(tokens.len());
    let mut i = 0usize;

    while i < tokens.len() {
        let t0 = tokens.get(i);
        let t1 = tokens.get(i + 1);
        let t2 = tokens.get(i + 2);

        if let (
            Some(Token::Consonant(left)),
            Some(Token::Halant(_)),
            Some(Token::Consonant(right)),
        ) = (t0, t1, t2)
        {
            if let Some(ligature) = ligature_for_pair(left, right) {
                out.push(Token::Consonant(ligature.to_owned()));
                i += 3;
                continue;
            }
        }

        out.push(tokens[i].clone());
        i += 1;
    }
}

fn is_word_boundary_token(token: Option<&Token>) -> bool {
    matches!(token, Some(Token::Raw(raw)) if raw.chars().all(is_separator_char))
}

fn is_word_end(tokens: &[Token], index: usize) -> bool {
    let next = tokens.get(index + 1);
    next.is_none() || is_word_boundary_token(next)
}

fn apply_schwa_rule_in_place(out: &mut Vec<Token>) {
    let mut i = 0usize;

    while i < out.len() {
        if matches!(out.get(i), Some(Token::Mark(g)) if g == ANUSVARA)
            && matches!(out.get(i + 1), Some(Token::Consonant(_)))
            && matches!(out.get(i + 2), Some(Token::InherentA))
            && is_word_end(&out, i + 2)
        {
            out[i + 2] = Token::Matra("ा".to_owned());
        }

        if matches!(out.get(i), Some(Token::Consonant(g)) if g == "क")
            && matches!(out.get(i + 1), Some(Token::InherentA))
            && matches!(out.get(i + 2), Some(Token::Consonant(g)) if g == "य")
            && is_word_end(&out, i + 2)
        {
            out[i + 1] = Token::Matra("ा".to_owned());
        }

        if matches!(out.get(i), Some(Token::Consonant(g)) if g == "क़")
            && matches!(out.get(i + 1), Some(Token::InherentA))
            && is_word_end(&out, i + 1)
        {
            out[i + 1] = Token::Matra("ा".to_owned());
        }

        if matches!(out.get(i), Some(Token::Consonant(g)) if g == "र")
            && matches!(out.get(i + 1), Some(Token::Halant(_)))
            && matches!(out.get(i + 2), Some(Token::Consonant(g)) if g == "त")
            && matches!(out.get(i + 3), Some(Token::InherentA))
            && matches!(out.get(i + 4), Some(Token::Consonant(g)) if g == "य")
            && is_word_end(&out, i + 4)
        {
            out.remove(i + 1);
            out[i + 2] = Token::Matra("ा".to_owned());
        }

        if matches!(out.get(i), Some(Token::Consonant(g)) if g == "र")
            && matches!(out.get(i + 1), Some(Token::Halant(_)))
            && matches!(out.get(i + 2), Some(Token::Consonant(g)) if g == "त")
            && matches!(out.get(i + 3), Some(Token::Matra(g)) if g == "ो")
            && matches!(out.get(i + 4), Some(Token::Consonant(g)) if g == "स")
            && is_word_end(&out, i + 4)
        {
            out.remove(i + 1);
        }

        i += 1;
    }
}

fn run_rule_pipeline(tokens: Vec<Token>, options: &RuleOptions) -> Vec<Token> {
    let mut primary = tokens;
    let mut secondary = Vec::with_capacity(primary.len().saturating_mul(2));

    if options.enable_nukta {
        apply_nukta_rule_into(&primary, &mut secondary);
        std::mem::swap(&mut primary, &mut secondary);
    }

    apply_nasalization_rule_into(&primary, options, &mut secondary);
    std::mem::swap(&mut primary, &mut secondary);

    if options.enable_ligature_collapse {
        apply_ligature_rule_into(&primary, &mut secondary);
        std::mem::swap(&mut primary, &mut secondary);
    }

    if options.enable_schwa_deletion {
        apply_schwa_rule_in_place(&mut primary);
    }

    primary
}

fn stringify_tokens(tokens: &[Token]) -> String {
    let mut out = String::new();

    for token in tokens {
        match token {
            Token::InherentA => {}
            Token::Raw(text) => out.push_str(text),
            Token::VowelIndependent(glyph)
            | Token::Matra(glyph)
            | Token::Consonant(glyph)
            | Token::Mark(glyph)
            | Token::Halant(glyph) => out.push_str(glyph),
        }
    }

    out
}

fn compute_rendered(
    raw: &str,
    trie: &TrieNode<TransliterationEntry>,
    options: &RuleOptions,
) -> String {
    let base_tokens = tokenize_buffer(raw, trie);
    let post_tokens = run_rule_pipeline(base_tokens, options);
    stringify_tokens(&post_tokens)
}

fn to_js_edit(edit: Edit) -> Result<JsValue, JsValue> {
    serde_wasm_bindgen::to_value(&edit).map_err(to_js_error)
}

#[wasm_bindgen]
pub fn compile_language_pack(
    expanded_map: JsValue,
    script_id: String,
    language_id: String,
    rules: Option<JsValue>,
) -> Result<Vec<u8>, JsValue> {
    let map: StdHashMap<String, TransliterationEntry> =
        serde_wasm_bindgen::from_value(expanded_map).map_err(to_js_error)?;
    let map: HashMap<String, TransliterationEntry> = map.into_iter().collect();
    let rule_input = parse_rule_options_input(rules)?;
    let std_map: StdHashMap<String, TransliterationEntry> = map.into_iter().collect();
    language_pack::compile_pack(std_map, script_id, language_id, rule_input).map_err(to_js_error)
}

#[wasm_bindgen]
pub fn compile_script_base_pack(
    expanded_map: JsValue,
    script_id: String,
) -> Result<Vec<u8>, JsValue> {
    let map: StdHashMap<String, TransliterationEntry> =
        serde_wasm_bindgen::from_value(expanded_map).map_err(to_js_error)?;
    language_pack::compile_script_base_pack(map, script_id).map_err(to_js_error)
}

#[wasm_bindgen]
pub fn compile_language_overlay_pack(
    expanded_map: JsValue,
    script_id: String,
    language_id: String,
    rules: Option<JsValue>,
) -> Result<Vec<u8>, JsValue> {
    let map: StdHashMap<String, TransliterationEntry> =
        serde_wasm_bindgen::from_value(expanded_map).map_err(to_js_error)?;
    let rule_input = parse_rule_options_input(rules)?;
    language_pack::compile_language_overlay_pack(map, script_id, language_id, rule_input)
        .map_err(to_js_error)
}

#[wasm_bindgen]
pub fn merge_language_packs(
    base_pack_bytes: &[u8],
    overlay_pack_bytes: &[u8],
) -> Result<Vec<u8>, JsValue> {
    language_pack::merge_base_overlay_as_full_pack(base_pack_bytes, overlay_pack_bytes)
        .map_err(to_js_error)
}

#[wasm_bindgen]
pub fn inspect_language_pack(pack_bytes: &[u8]) -> Result<JsValue, JsValue> {
    let summary = language_pack::summarize_pack(pack_bytes).map_err(to_js_error)?;
    serde_wasm_bindgen::to_value(&summary).map_err(to_js_error)
}

fn to_js_error(err: impl core::fmt::Display) -> JsValue {
    JsValue::from_str(&err.to_string())
}

fn parse_rule_options_input(rules: Option<JsValue>) -> Result<Option<RuleOptionsInput>, JsValue> {
    let Some(value) = rules else {
        return Ok(None);
    };
    if value.is_null() || value.is_undefined() {
        return Ok(None);
    }
    let input: RuleOptionsInput = serde_wasm_bindgen::from_value(value).map_err(to_js_error)?;
    Ok(Some(input))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_map() -> HashMap<String, TransliterationEntry> {
        let mut map = HashMap::new();
        map.insert(
            "k".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "क".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "kh".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "ख".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "g".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "ग".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "n".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "न".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "sh".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "श".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "y".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "य".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "r".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "र".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "t".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "त".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "o".to_owned(),
            TransliterationEntry {
                entry_type: "vowel".to_owned(),
                glyph: "ओ".to_owned(),
                matra: Some("ो".to_owned()),
            },
        );
        map.insert(
            "s".to_owned(),
            TransliterationEntry {
                entry_type: "consonant".to_owned(),
                glyph: "स".to_owned(),
                matra: None,
            },
        );
        map.insert(
            "a".to_owned(),
            TransliterationEntry {
                entry_type: "vowel".to_owned(),
                glyph: "अ".to_owned(),
                matra: Some(String::new()),
            },
        );
        map.insert(
            "A".to_owned(),
            TransliterationEntry {
                entry_type: "vowel".to_owned(),
                glyph: "आ".to_owned(),
                matra: Some("ा".to_owned()),
            },
        );
        map
    }

    #[test]
    fn separator_detection_matches_js_contract() {
        assert!(is_separator(" "));
        assert!(is_separator("!"));
        assert!(!is_separator("k"));
    }

    #[test]
    fn compute_rendered_matches_basic_js_behaviors() {
        let trie = trie::build_trie(&test_map());
        let options = RuleOptions::default();
        assert_eq!(compute_rendered("k", &trie, &options), "क");
        assert_eq!(compute_rendered("kh", &trie, &options), "ख");
        assert_eq!(compute_rendered("ka", &trie, &options), "क");
        assert_eq!(compute_rendered("kA", &trie, &options), "का");
    }

    #[test]
    fn rule_pipeline_nukta_ligature_schwa_paths() {
        let trie = trie::build_trie(&test_map());
        let options = RuleOptions::default();
        assert_eq!(compute_rendered("qa", &trie, &options), "क़ा");
        assert_eq!(compute_rendered("ksh", &trie, &options), "क्ष");
        assert_eq!(compute_rendered("kay", &trie, &options), "काय");
        assert_eq!(compute_rendered("kartos", &trie, &options), "करतोस");
    }

    #[test]
    fn rule_options_toggles_affect_output() {
        let trie = trie::build_trie(&test_map());
        let options = RuleOptions {
            enable_nukta: false,
            nasalization_mode: NasalizationMode::Anusvara,
            enable_ligature_collapse: false,
            enable_schwa_deletion: false,
        };
        assert_eq!(compute_rendered("q", &trie, &options), "q");
        assert_eq!(compute_rendered("ksh", &trie, &options), "क्श");
        assert_eq!(compute_rendered("kartay", &trie, &options), "कर्तय");
    }

    #[test]
    fn nasalization_modes_match_expected_behavior() {
        let trie = trie::build_trie(&test_map());
        let default = RuleOptions::default();
        let panchama = RuleOptions {
            enable_nukta: true,
            nasalization_mode: NasalizationMode::Panchamakshar,
            enable_ligature_collapse: true,
            enable_schwa_deletion: true,
        };

        assert_eq!(compute_rendered("anka", &trie, &default), "अंका");
        assert_eq!(compute_rendered("anka", &trie, &panchama), "अङ्क");
    }
}
