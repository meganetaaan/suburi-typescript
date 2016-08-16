function hello(...args: string[]){
  return `Hello, ${args.join(' & ')}`;
}
console.log(hello('TS', 'JS'));

export {  }
