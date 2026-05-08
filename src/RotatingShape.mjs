export class RotatingShape {
  shape;
  constructor(shapeStr) {
    this.shape = shapeStr.replaceAll(" ", "").trim().split('\n').map((line) => line.split(''))
  }
  static fromString(shapeStr) {
    return new RotatingShape(shapeStr)
  }
  toString() {
    return this.shape.map((line) => line.join('')).join('\n') + '\n'
  }
  rotateRight() {
    const newBoard = Array.from({ length: this.shape.length }, () => Array(this.shape.length).fill("."));
    this.shape.forEach((row, i) => {
      row.forEach((cell, j) => {
        newBoard[j][this.shape.length - i - 1] = cell
      })
    })
    return RotatingShape.fromString(newBoard.map((line) => line.join('')).join('\n'))
  }
  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight()
  }
}
