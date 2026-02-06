# Behavioral Contract (Engine API)

Status: Frozen for v0

This document specifies the observable behavior of the input engine interface used by host applications (web, desktop, or mobile). It defines how the engine communicates edits to apply in the host’s text field via a small, deterministic API.

This document does not define any specific language, script, or transliteration mapping. It only defines the contract and state behavior.

## Concepts

- Host: The application integrating the engine and applying edits to a text field.
- Engine: Stateful component that consumes user input events and emits edit operations.
- Composition: The not-yet-finalized text segment produced by the engine that may be revised as the user continues typing.
- Committed text: Finalized text that will not be revised by the engine unless the host explicitly resets the engine and replays input.

## Data Model

All mutating methods return an edit operation with the shape:

```ts
type Edit = { backspace: number; insert: string };
```

Semantics:
- backspace: A non-negative integer. The host must delete backward this many times from the current caret position.
- insert: A string (possibly empty). The host must insert this string at the caret position after applying the deletions.

The host must apply the returned edit atomically and in order. The engine assumes the caret is positioned immediately after the last text inserted by the engine and that the host does not edit within the active composition region except via engine edits.

## Engine State

The engine maintains internal state across calls:
- It may track an input buffer (raw keystrokes) and/or a rendered composition string.
- It has a notion of whether it is currently composing.

The contract requires only that for any given initial state and sequence of API calls, outputs are deterministic.

## API

### processChar(char) -> Edit

Consumes a user “character input” event.

Inputs:
- char: A string representing a single user input unit as delivered by the host (e.g., from a keypress or text input event). The engine must treat it as an opaque string and must not assume it is ASCII.

Behavior:
- If the engine is not composing, it may start a new composition.
- If the engine is composing, it may extend or revise the current composition.
- The returned Edit updates the host text so it matches the engine’s current rendered output for the active composition and/or any committed output produced as a side-effect of the input.

Allowed outcomes:
- No-op: `{ backspace: 0, insert: "" }`
- Insert-only: `{ backspace: 0, insert: "…" }`
- Replace/rewrite: `{ backspace: N, insert: "…" }` where N > 0

Constraints:
- backspace MUST be an integer >= 0.
- insert MUST be a valid string (may be empty).
- The engine MUST NOT rely on the host to interpret special control characters in insert.

### backspace() -> Edit

Consumes a “delete backward” user event.

Behavior:
- If composing, deletes the last input unit from the engine’s internal buffer and updates the rendered composition accordingly.
- If not composing, returns a no-op.

The returned Edit updates the host text so it matches the engine’s new rendered output.

Constraints:
- backspace MUST be an integer >= 0.
- insert MUST be a string (may be empty).

### commit() -> Edit

Finalizes the current composition.

Behavior:
- If composing, transitions to not composing.
- The returned Edit updates the host text so it matches the engine’s committed form of the composition.
  - In some engines, the committed form may differ from the currently displayed composition (e.g., final normalization). In that case, commit() may return a non-zero backspace and/or a non-empty insert to rewrite the segment.
- If not composing, returns a no-op.

After commit(), subsequent processChar calls begin a new composition unless the engine chooses to emit committed text directly.

### reset() -> void

Clears all internal engine state.

Behavior:
- After reset(), the engine behaves as if newly constructed.
- reset() MUST NOT emit an edit operation. The host is responsible for ensuring the engine and text field are in a consistent state. Typical use:
  - Call reset() when focus changes, cursor moves into the middle of text, the host programmatically edits the field, or when the host cannot guarantee caret-at-end-of-composition.

## Host Integration Rules (Normative)

The host MUST:
- Apply each returned Edit in order: delete backward backspace times, then insert insert.
- Route printable character input to processChar(char).
- Route the Backspace key (or deleteBackward action) to backspace().
- Call commit() on explicit commit triggers (e.g., Enter/Space depending on UX, blur, or when switching input modes), according to product needs.
- Call reset() whenever the caret position changes away from the end of the active composition or when the host mutates the text independently.

The host MUST NOT:
- Partially apply an Edit.
- Reorder edits or coalesce edits from multiple calls.
- Assume backspace is measured in bytes, UTF-8 length, or any specific encoding unit. It represents the count of delete-backward actions the host performs.

## Engine Guarantees (Normative)

The engine MUST:
- Be deterministic with respect to its internal state and the sequence of API calls.
- Never return negative backspace.
- Never throw for normal inputs; if input cannot be handled, it should return a safe edit (including no-op) and continue.
- After reset(), produce outputs as if newly constructed.

## Notes on Efficiency (Non-Normative)

An engine may choose to return minimal edits (e.g., using a common-prefix diff) or a full rewrite of the current composition segment. The host must treat both as valid as long as the applied result matches the engine’s intended visible text.

