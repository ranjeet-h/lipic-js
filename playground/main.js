import { createInputInterceptor, createTransliterationEngine, marathiPhoneticExpanded } from "../dist/index.js";

function engine() {
  return createTransliterationEngine({ expandedMap: marathiPhoneticExpanded });
}

const textarea = document.getElementById("ta");
const input = document.getElementById("txt");
const contenteditable = document.getElementById("ce");

const interceptors = [
  createInputInterceptor({ element: textarea, engine: engine() }),
  createInputInterceptor({ element: input, engine: engine() }),
  createInputInterceptor({ element: contenteditable, engine: engine() })
];

for (const i of interceptors) i.attach();

const lang = document.getElementById("language");
lang.addEventListener("change", () => {
  // UI-only selector for this milestone.
  console.log("Selected language:", lang.value);
});
