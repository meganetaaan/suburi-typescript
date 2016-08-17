class Base {
  str: string;
}

class InheritA extends Base {
  num: number;
}
class InheritB extends Base {
  bool: boolean;
}


let obj: Base = new InheritA();

(obj as InheritA).num;
if(obj instanceof InheritA) {
  obj.num;
} else if (obj instanceof InheritB) {
  obj.bool;
} else {
  obj.str;
}

export {  }
