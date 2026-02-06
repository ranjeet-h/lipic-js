/* tslint:disable */
/* eslint-disable */

export class Engine {
    free(): void;
    [Symbol.dispose](): void;
    backspace(): any;
    commit(): any;
    static fromLanguagePack(pack_bytes: Uint8Array): Engine;
    static fromLanguagePacks(base_pack_bytes: Uint8Array, overlay_pack_bytes: Uint8Array): Engine;
    constructor(expanded_map: any, rules?: any | null);
    process_char(ch: string): any;
    process_text(text: string): any;
    reset(): void;
}

export class WasmTrie {
    free(): void;
    [Symbol.dispose](): void;
    constructor(expanded_map: any);
    walk_longest(input: string, start_index: number): any;
}

export function compile_language_overlay_pack(expanded_map: any, script_id: string, language_id: string, rules?: any | null): Uint8Array;

export function compile_language_pack(expanded_map: any, script_id: string, language_id: string, rules?: any | null): Uint8Array;

export function compile_script_base_pack(expanded_map: any, script_id: string): Uint8Array;

export function inspect_language_pack(pack_bytes: Uint8Array): any;

export function merge_language_packs(base_pack_bytes: Uint8Array, overlay_pack_bytes: Uint8Array): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_engine_free: (a: number, b: number) => void;
    readonly __wbg_wasmtrie_free: (a: number, b: number) => void;
    readonly compile_language_overlay_pack: (a: any, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly compile_language_pack: (a: any, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly compile_script_base_pack: (a: any, b: number, c: number) => [number, number, number, number];
    readonly engine_backspace: (a: number) => [number, number, number];
    readonly engine_commit: (a: number) => [number, number, number];
    readonly engine_fromLanguagePack: (a: number, b: number) => [number, number, number];
    readonly engine_fromLanguagePacks: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly engine_new: (a: any, b: number) => [number, number, number];
    readonly engine_process_char: (a: number, b: number, c: number) => [number, number, number];
    readonly engine_process_text: (a: number, b: number, c: number) => [number, number, number];
    readonly engine_reset: (a: number) => void;
    readonly inspect_language_pack: (a: number, b: number) => [number, number, number];
    readonly merge_language_packs: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly wasmtrie_new: (a: any) => [number, number, number];
    readonly wasmtrie_walk_longest: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
