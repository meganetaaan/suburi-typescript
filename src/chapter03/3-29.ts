let str = 'TypeScript';
if ( typeof str === 'number' ){
  str.toUpperCase();
}

function test(): never {
  throw new Error();
}

let obj: never = test();
obj.test();

export { };
