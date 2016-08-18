let func: () => string;

//let a: () => string | () => boolean;

let b: (() => string) | (() => boolean);

let c: { (): string; } | { (): boolean; };

let d: (() => string);

export { func, b, c, d };
