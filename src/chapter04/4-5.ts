function upperA(word?: string) {
  if (word == null) {
    word = 'TypeScript';
  }
  console.log(word.toUpperCase());
}

function upperB(word?: string) {
  word = word || 'TypeScript';
  console.log(word.toUpperCase());
}

function upperC(word = 'TypeScript') {
  console.log(word.toUpperCase());
}

export { upperA, upperB, upperC }
