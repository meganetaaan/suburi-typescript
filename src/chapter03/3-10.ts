let obj: { name: string; } = {
  name: 'TypeScript',
};

obj = {
  name: 'JavaScript',
  //version: '2016',
}

let tmp = {
  name: 'JavaScript',
  version: '2016',
}
obj = tmp;

interface FooOptions {
  fileName?: string;
  checkBar?: boolean;
}
declare function foo(opts: FooOptions): void;

foo({filename: 'vvakame.txt', checkBar: true});

export {  }
