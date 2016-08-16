abstract class Animal {
  abstract name: string;
  abstract get poo(): string;

  abstract speak(): string;
  sleep(): string {
    return 'zzzZZZ...';
  }
}

class Cat extends Animal {
  name = 'Cat';
  poo = 'poo...';

  speak(): string {
    return 'meow';
  }
}

const cat = new Cat();
console.log(cat.speak());

export {  }
