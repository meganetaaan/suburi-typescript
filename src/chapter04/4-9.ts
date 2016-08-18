let obj: number | string = null as any;

if(typeof obj === 'string') {
  obj.charAt(0);
} else {
  obj.toFixed(2);
}

export {  }
