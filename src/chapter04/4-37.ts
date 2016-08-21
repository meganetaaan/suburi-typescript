function zip<T1, T2>(v1: T1, v2: T2): [T1, T2] {
  return [v1, v2];
}

let tuple = zip('str', { hello(): string { return 'hello!';} });
tuple[0].charAt(0);
tuple[1].hello();

export {}
