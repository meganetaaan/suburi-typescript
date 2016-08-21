class X {
  _this: this;
  x(): this {
    return this;
  }

  y(arg: this): this {
    return arg;
  }

  z() {
    return this;
  }
}

class Y extends X {
  k() {
    console.log('Y');
  }
}

interface Z extends X {
  c(): void;
}

new Y().x().z().k();
