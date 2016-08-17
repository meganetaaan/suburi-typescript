let func: (value: string) => string;

func = word => `Hello, ${word}`;
func = (word: string): string=> {
  return `Hello, ${word}`;
};
