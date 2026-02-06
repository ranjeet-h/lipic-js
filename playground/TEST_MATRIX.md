# Manual Test Matrix (Desktop)

## Browsers

- [ ] Chrome (desktop)
- [ ] Firefox (desktop)

## Checklist per browser

- [ ] Basic typing transliteration works in `textarea`
- [ ] Basic typing transliteration works in `input[type=text]`
- [ ] Basic typing transliteration works in `contenteditable` (collapsed caret)
- [ ] Smart backspace: `k h ⌫ -> क`
- [ ] Smart backspace: `k i ⌫ -> क`
- [ ] Modifier shortcuts bypassed (`Ctrl/Cmd+A/C/V/Z`)
- [ ] During native composition, interceptor does not transliterate
- [ ] After `compositionend`, transliteration resumes
