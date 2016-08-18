class X {
  str: string;
}
class Y {
  num: number;
}
class Z extends X {
  bool: boolean;
}

let obj: X | Y | Z = null as any;
if (obj instanceof X) {
  obj.str;
  if(obj instanceof Z){
    obj.bool;
  }
}

if(obj instanceof Z) {
  obj.bool;
} else {
  if (obj instanceof Y) {
    obj.num;
  } else {
    obj.str;
  }
}
