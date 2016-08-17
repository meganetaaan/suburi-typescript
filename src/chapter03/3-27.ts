// class and generics
class SampleA<T> {
  constructor(public data: T){

  }
}
let objA = new SampleA<string>('str');

// interface and generics
interface SampleB<T>{
  data: T;
}
let objB: SampleB<number> = {data: 1};

// object type literal
let obj: {
  new <T>(value: T): any;
  <T>(value: T): any;
  methodA<T>(value: T): any;
  methodB<T, U>(value: T): U;
}

// function type literal
let func: <T>(array: T[]) => T;
func = <T>(array: T[]) => array[0];
func<number>([1, 2, 3]);

// constructor
let ctor: new <T>(value: T) => any;
ctor = SampleA;
new ctor<string>('str');

// type alias
type SampleC<T> = { data: T; };
let objC: SampleC<number> = { data: 1 };

export { SampleA, objA, SampleB, objB, obj, SampleC, objC }
