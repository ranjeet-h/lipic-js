import devanagariBase from "../maps/devanagari/base.json";
import marathiPhoneticBase from "../maps/marathi/phonetic.base.json";
import marathiPhoneticExpanded from "../maps/marathi/phonetic.expanded.json";

export type Edit = { backspace: number; insert: string };

export const maps = {
  devanagari: {
    base: devanagariBase
  },
  marathi: {
    phonetic: {
      base: marathiPhoneticBase,
      expanded: marathiPhoneticExpanded
    }
  }
} as const;

export { devanagariBase, marathiPhoneticBase, marathiPhoneticExpanded };

