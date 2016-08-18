class BaseA {
}

class InheritAA extends BaseA {

}
class InheritAB extends BaseA {

}

let obj = new InheritAA();

console.log(obj instanceof BaseA);
console.log(obj instanceof InheritAA);
console.log(obj instanceof InheritAB);

InheritAA.prototype = new InheritAB();
obj = new InheritAA();

console.log(obj instanceof InheritAB);

export {  }
