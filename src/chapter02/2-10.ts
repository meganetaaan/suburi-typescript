function hello(word: string): string {
  return `Hello, ${word}`;
}
console.log(hello('TypeScript'));

function bye(word: string) {
  return `Bye, ${word}`;
}
console.log(bye('TypeScript'));

function hey(word?: string) {
  return `Hey, ${word || 'TypeScript'}`;
}
console.log(hey());

function ahoy(word = 'TypeScript') {
  return `Ahoy! ${word}`;
}
console.log(ahoy());

export {  }
