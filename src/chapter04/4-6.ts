function upperAll(words: string | string[]) {
  if (typeof words === 'string') {
    words = [words];
  }

  return words.map(word => word.toUpperCase());
}

console.log(upperAll('TypeScript'));
console.log(upperAll(['TypeScript', 'JavaScript']));

export {}
