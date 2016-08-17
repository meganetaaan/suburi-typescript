interface Point {
  x: number;
  y: number;
}

class PointImpl1 implements Point {
  constructor(public x: number, public y: number) {
  }
}
class PointImpl2 {
  constructor(public x: number, public y: number) {
  }
}

function double(p: Point): Point {
  return {
    x: p.x * 2,
    y: p.y * 2,
  }
}
double(new PointImpl1(1, 2));
double(new PointImpl2(3, 2));
double({x: 5, y: 6});
let p = {
  x: 7,
  y: 8,
  z: 9,
};
double(p);
