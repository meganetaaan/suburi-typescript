declare class Base {
  str: string;
}

let obj = new Base();
let num: number = (obj as any).num;

export { num }
