interface A {
  str: string;
}

class AImpl implements A {
  str: string;
}

let objA: A = new AImpl();

interface B1 {
  str: string;
}
interface B2 extends B1 {
  num: number;
}
let objB: B2 = {
  str: 'string',
  num: 42,
};

class FooClass {
  constructor(public num: number) {
    console.log(num);
  }
}
interface C extends FooClass {
  str: string;
}
let objC: C = {
  num: 42,
  str: 'string',
};
