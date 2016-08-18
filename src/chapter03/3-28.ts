class Base {
  str: string;
}

class InheritA extends Base {
  num: number;
}

interface Sample<T extends Base> {
  method(): T;
}

let objA: Sample<InheritA>;
// let objB: Sample<string>;
let objC: Sample<{str: string }>;
let objD = {str: 'hoge'};

interface Service<T> {
  service(t: T): T;
}

function f<T extends Service<T>>(x: T) {
  return x.service(x);
}
