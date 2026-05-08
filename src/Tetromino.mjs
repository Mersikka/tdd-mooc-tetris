import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino {
  shape;
  name;
  orientation;

  constructor(shapeStr, name, orientation) {
    this.shape = RotatingShape.fromString(shapeStr)
    this.name = name
    this.orientation = orientation
  }

  static T_SHAPE = new Tetromino('.T.\nTTT\n...', 'T', 0)

  static I_SHAPE = new Tetromino('.....\n.....\nIIII.\n.....\n.....', 'I', 0)

  toString() {
    return this.shape.toString()
  }

  rotateRight() {
    switch (this.name) {
      case 'T':
        return this.shape.rotateRight()
      case 'I':
        if (this.orientation === 0) {
          const newShape = this.shape.rotateRight()
          return new Tetromino(newShape.toString(), 'I', 1)
        } else {
          const newShape = this.shape.rotateLeft()
          return new Tetromino(newShape.toString(), 'I', 0)
        }
    }
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight()
  }
};
