{
  type Data = string | boolean;
  let obj: Data = true;

  console.log(obj);
}

{
  type Data = number | Date;
  let obj: Data = 1;

  console.log(obj);
}


{
  class Foo {  }
  enum Bar {
    a,
    b,
  }
  interface Buzz {  }
  console.log(Foo, Bar.a, null as any as Buzz);
}

export {  }
