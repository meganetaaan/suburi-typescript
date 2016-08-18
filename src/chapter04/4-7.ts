interface Foo {
  value: number | string;
}

let foo: Foo = {
  value: 'TYpeScript',
}

//foo.falue.toUpperCase();
if(typeof foo.value === 'string'){
  foo.value.toUpperCase();
}

export {  }
