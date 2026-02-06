export interface InputStack {
  push(char: string): void;
  pop(): string | undefined;
  clear(): void;
  toString(): string;
  size(): number;
  isEmpty(): boolean;
}

export function createInputStack(): InputStack {
  const parts: string[] = [];

  return {
    push(char: string): void {
      parts.push(char);
    },
    pop(): string | undefined {
      return parts.pop();
    },
    clear(): void {
      parts.length = 0;
    },
    toString(): string {
      return parts.join("");
    },
    size(): number {
      return parts.length;
    },
    isEmpty(): boolean {
      return parts.length === 0;
    }
  };
}
