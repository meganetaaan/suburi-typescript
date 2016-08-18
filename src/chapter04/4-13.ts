class Sample {
  str: string;
}

let obj: Sample = {
  str: 'Hi!',
};

function isSample(s: Sample): s is Sample {
  if (!s) {
    return false;
  }
  return typeof s.str === 'string';
}

if (isSample(obj)) {
  console.log(obj.str);
}
