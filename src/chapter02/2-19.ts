namespace a {
  export class Sample {  }
}

namespace b {
  let objA: a.Sample;
  objA = new a.Sample();

  import Sample = a.Sample;
  let objB: Sample;
  objB = new Sample();

  import Test = a.Sample;
  let objC: Test;
  objC = new Test();

  objA = new Test();
}
