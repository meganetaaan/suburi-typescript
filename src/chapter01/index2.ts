class Parent {
  greeting(name: string) {
    return `Hi! ${name}`;
  }
}

class Child extends Parent {
  greeting(name: string) {
    return super.greeting(name) + ". How are you?";
  }
}

let obj = new Child();
console.log(obj.greeting('Tony'));
