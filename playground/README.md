# Playground

Simple manual browser harness for Milestone 5.

## Run

1. Build library:

```bash
npm run build
```

2. Serve project root with any static server, for example:

```bash
npx serve .
```

3. Open `/playground/index.html` in the browser.

## Notes

- Language selector is UI-only in this milestone.
- Interceptor is attached to:
  - `textarea`
  - `input[type=text]`
  - `contenteditable` (collapsed caret flow)
