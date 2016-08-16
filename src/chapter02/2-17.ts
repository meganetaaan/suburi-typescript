namespace a {
  class Sample {
    hello(word = 'TypeScript') {
      return `Hello, ${word}`;
    }
  }

  export interface Hello {
    hello(word?: string): string;
  }
  export let obj: Hello = new Sample();
}

namespace a {
  export function bye(word = 'JavaScript') {
    return `Bye, ${word}`;
  }

  //let tmp = new Sample();
}
