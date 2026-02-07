# Mobile IME Test Matrix

Use this checklist before every release that touches transliteration, input interception, or playground integration.

## Scope

Validate:
- `input`
- `textarea`
- `contenteditable`

Across:
- live typing
- composition updates
- composition commit
- space commit
- backspace/delete
- mixed English + transliterated phrases

## Device/Keyboard Matrix

1. Android (latest Chrome) + Samsung Keyboard
2. Android (latest Chrome) + Gboard
3. Android (latest Chrome) + SwiftKey
4. iOS (latest Safari) + Apple Keyboard
5. iOS (latest Chrome) + Apple Keyboard

## Required Scenarios

For each matrix row, run all scenarios below on `playground/index.html`:

1. Phrase typing
- Type: `hi kay chalay`
- Expected: transliteration is stable, no repeated glyph blocks, no raw English leak in output after commit.

2. Multi-word typing
- Type: `works ho na`
- Expected: each word commits cleanly; spaces preserved; no duplication between word boundaries.

3. Backspace single char
- Press backspace repeatedly at end of line.
- Expected: predictable deletion; no unexpected rewrites.

4. Backspace word-level delete
- Use keyboard delete-word gesture/key if available.
- Expected: no corruption or repeated insertion.

5. Composition-only path
- Type slowly so keyboard emits composition updates.
- Expected: no repeated accumulation during live composition; final committed text transliterates once.

6. Keystroke strip sanity (playground)
- Top keystrokes strip should reflect typed token flow without per-update spam duplicates.

## Pass/Fail Criteria

Pass:
- No duplicated transliterated segments.
- No raw English segment left after commit (unless explicitly intended).
- Backspace/delete works without introducing new characters.
- Behavior is consistent in `textarea`, `input`, `contenteditable`.

Fail:
- Output like repeated characters/blocks (e.g. `ककक...` unexpectedly).
- English suffix remains after a committed composition.
- Keystroke strip diverges from user input intent.

## Debug Capture (When Failing)

If a scenario fails, capture:
- device model
- OS version
- browser version
- keyboard app + version
- exact typed phrase
- screenshot/video
- event trace from temporary debug panel or remote inspector

Record findings in issue template:
- `expected`
- `actual`
- `event sequence`
- `repro steps`

## Release Gate

Do not publish if any matrix row fails required scenarios above.

