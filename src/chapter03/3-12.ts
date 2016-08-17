class Foo {
  readonly str: string;

  constructor() {
    this.str = 'TypeScript';
  }

  modify(){
    this.str = 'JavaScript';
  }
}

export { Foo }
