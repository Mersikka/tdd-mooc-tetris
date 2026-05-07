export class RotatingShape {
  shape;
  constructor(shapeStr) {
    this.shape = shapeStr.replaceAll(" ", "").split('\n').map((line) => line.split())
  }
  static fromString(shapeStr) {
    return new RotatingShape(shapeStr)
  }
  toString() {
    return this.shape.map((line) => line.join()).join('\n') + '\n'
  }
}
