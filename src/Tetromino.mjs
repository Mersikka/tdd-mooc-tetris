import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino {
  shape;
  name;
  orientation;

  constructor(shapeStr, name) {
    this.shape = RotatingShape.fromString(shapeStr)
    this.name = name
    this.orientation = 0
  }

  static T_SHAPE = new Tetromino('.T.\nTTT\n...', 'T')

  static I_SHAPE = new Tetromino('.....\n.....\nIIII.\n.....\n.....', 'I')

  toString() {
    return this.shape.toString()
  }

  rotateRight() {
    switch (this.name) {
      case 'T':
        return this.shape.rotateRight()
      case 'I':
        if (this.orientation === 0) {
          this.orientation++
          return this.shape.rotateRight()
        } else {
          this.orientation = 0
          return this.shape.rotateLeft()
        }
    }
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight()
  }
};
