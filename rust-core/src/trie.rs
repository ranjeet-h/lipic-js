use hashbrown::HashMap;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone)]
pub struct TrieNode<TValue> {
    children: HashMap<char, TrieNode<TValue>>,
    terminal: Option<TerminalValue<TValue>>,
}

#[derive(Debug, Clone)]
struct TerminalValue<TValue> {
    key: String,
    value: TValue,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct LongestMatchResult<TValue> {
    pub is_prefix: bool,
    pub matched: bool,
    pub key: String,
    pub value: Option<TValue>,
    pub length: usize,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct LongestMatchValueResult<TValue> {
    pub is_prefix: bool,
    pub matched: bool,
    pub value: Option<TValue>,
    pub length: usize,
}

impl<TValue> TrieNode<TValue> {
    fn new() -> Self {
        Self {
            children: HashMap::new(),
            terminal: None,
        }
    }
}

pub fn build_trie<TValue: Clone>(expanded_map: &HashMap<String, TValue>) -> TrieNode<TValue> {
    let mut root = TrieNode::new();

    for (key, value) in expanded_map {
        if key.is_empty() {
            continue;
        }

        let mut node = &mut root;
        for ch in key.chars() {
            node = node.children.entry(ch).or_insert_with(TrieNode::new);
        }

        node.terminal = Some(TerminalValue {
            key: key.clone(),
            value: value.clone(),
        });
    }

    root
}

pub fn walk_longest<TValue: Clone>(
    root: &TrieNode<TValue>,
    input: &str,
    start_index: usize,
) -> LongestMatchResult<TValue> {
    let chars: Vec<char> = input.chars().collect();
    walk_longest_chars(root, &chars, start_index)
}

pub fn walk_longest_chars<TValue: Clone>(
    root: &TrieNode<TValue>,
    chars: &[char],
    start_index: usize,
) -> LongestMatchResult<TValue> {
    let mut node = Some(root);
    let mut matched_len = 0usize;
    let mut matched_key = String::new();
    let mut matched_value = None;

    let total_chars = chars.len();
    if start_index >= total_chars {
        return LongestMatchResult {
            is_prefix: false,
            matched: false,
            key: String::new(),
            value: None,
            length: 0,
        };
    }

    let mut consumed_chars = 0usize;
    while let Some(current_node) = node {
        let idx = start_index + consumed_chars;
        let Some(ch) = chars.get(idx) else {
            break;
        };

        let Some(next_node) = current_node.children.get(ch) else {
            return LongestMatchResult {
                is_prefix: false,
                matched: matched_len > 0,
                key: matched_key,
                value: matched_value,
                length: matched_len,
            };
        };

        consumed_chars += 1;
        node = Some(next_node);

        if let Some(terminal) = &next_node.terminal {
            matched_len = consumed_chars;
            matched_key = terminal.key.clone();
            matched_value = Some(terminal.value.clone());
        }
    }

    LongestMatchResult {
        is_prefix: node.is_some() && (start_index + consumed_chars == total_chars),
        matched: matched_len > 0,
        key: matched_key,
        value: matched_value,
        length: matched_len,
    }
}

pub fn walk_longest_chars_value<TValue: Clone>(
    root: &TrieNode<TValue>,
    chars: &[char],
    start_index: usize,
) -> LongestMatchValueResult<TValue> {
    let mut node = Some(root);
    let mut matched_len = 0usize;
    let mut matched_value = None;

    let total_chars = chars.len();
    if start_index >= total_chars {
        return LongestMatchValueResult {
            is_prefix: false,
            matched: false,
            value: None,
            length: 0,
        };
    }

    let mut consumed_chars = 0usize;
    while let Some(current_node) = node {
        let idx = start_index + consumed_chars;
        let Some(ch) = chars.get(idx) else {
            break;
        };

        let Some(next_node) = current_node.children.get(ch) else {
            return LongestMatchValueResult {
                is_prefix: false,
                matched: matched_len > 0,
                value: matched_value,
                length: matched_len,
            };
        };

        consumed_chars += 1;
        node = Some(next_node);

        if let Some(terminal) = &next_node.terminal {
            matched_len = consumed_chars;
            matched_value = Some(terminal.value.clone());
        }
    }

    LongestMatchValueResult {
        is_prefix: node.is_some() && (start_index + consumed_chars == total_chars),
        matched: matched_len > 0,
        value: matched_value,
        length: matched_len,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_map() -> HashMap<String, serde_json::Value> {
        let mut map = HashMap::new();
        map.insert(
            "k".to_owned(),
            serde_json::json!({ "glyph": "क", "type": "consonant" }),
        );
        map.insert(
            "kh".to_owned(),
            serde_json::json!({ "glyph": "ख", "type": "consonant" }),
        );
        map.insert(
            "n".to_owned(),
            serde_json::json!({ "glyph": "न", "type": "consonant" }),
        );
        map.insert(
            "ng".to_owned(),
            serde_json::json!({ "glyph": "ङ", "type": "consonant" }),
        );
        map
    }

    #[test]
    fn longest_match_prefers_deeper_terminal() {
        let trie = build_trie(&test_map());
        let result = walk_longest(&trie, "kh", 0);
        assert!(result.matched);
        assert_eq!(result.key, "kh");
        assert_eq!(result.length, 2);
    }

    #[test]
    fn detects_prefix_without_terminal() {
        let trie = build_trie(&test_map());
        let result = walk_longest(&trie, "k", 0);
        assert!(result.is_prefix);
        assert!(result.matched);
        assert_eq!(result.key, "k");
    }

    #[test]
    fn invalid_suffix_returns_last_match() {
        let trie = build_trie(&test_map());
        let result = walk_longest(&trie, "kz", 0);
        assert!(!result.is_prefix);
        assert!(result.matched);
        assert_eq!(result.key, "k");
    }

    #[test]
    fn char_slice_path_matches_string_path() {
        let trie = build_trie(&test_map());
        let input = "kh";
        let chars: Vec<char> = input.chars().collect();
        let from_str = walk_longest(&trie, input, 0);
        let from_chars = walk_longest_chars(&trie, &chars, 0);
        assert_eq!(from_str, from_chars);
    }

    #[test]
    fn value_only_path_matches_keyed_path() {
        let trie = build_trie(&test_map());
        let chars: Vec<char> = "kh".chars().collect();
        let keyed = walk_longest_chars(&trie, &chars, 0);
        let value_only = walk_longest_chars_value(&trie, &chars, 0);
        assert_eq!(keyed.matched, value_only.matched);
        assert_eq!(keyed.is_prefix, value_only.is_prefix);
        assert_eq!(keyed.length, value_only.length);
        assert_eq!(keyed.value, value_only.value);
    }
}
