class Base {
  // instance variables
  numA: number;
  strA = 'string';
  public numB: number;
  private numC: number;
  protected numD: number;
  regexpA?: RegExp;

  // class variables
  static numA: number;
  public static numB: number;
  private static numC: number;
  protected static numD: number;
  static regexpA?: RegExp;

  // constructor
  constructor(boolA: boolean, public boolB: boolean, private boolC: boolean, protected boolD: boolean){
    console.log(boolA, this.numC, this.boolC, Base.numC);
  }

  // methods
  hello(word: string): string{
    return `Hello ${word}`;
  }

  // accessor
  private _date: Date;
  get dateA(): Date {
    return this._date;
  }
  set dateA(value: Date) {
    this._date = value;
  }

  optional(){
    // needs existance check
    if (this.regexpA != null){
      this.regexpA.test('Hi!');
    }
    if (Base.regexpA != null){
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

export {}
