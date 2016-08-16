class Base {
    // constructor
    constructor(boolA, boolB, boolC, boolD) {
        this.boolB = boolB;
        this.boolC = boolC;
        this.boolD = boolD;
        this.strA = 'string';
        console.log(boolA, this.numC, this.boolC, Base.numC);
    }
    // methods
    hello(word) {
        return `Hello ${word}`;
    }
    get dateA() {
        return this._date;
    }
    set dateA(value) {
        this._date = value;
    }
    optional() {
        // needs existance check
        if (this.regexpA != null) {
            this.regexpA.test('Hi!');
        }
        if (Base.regexpA != null) {
            Base.regexpA.test('Hi!');
        }
    }
}
let obj = new Base(true, false, true, false);
obj.numA;
obj.strA;
obj.numB;
//obj.numC;
//obj.numD;
obj.boolB;
//obj.boolC;
//obj.boolD;
obj.hello('TypeScript');
obj.dateA = new Date();
obj.dateA;
