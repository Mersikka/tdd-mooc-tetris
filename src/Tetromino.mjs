import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino {
  shape;
  name;

  constructor(shapeStr, name) {
    this.shape = RotatingShape.fromString(shapeStr)
    this.name = name
  }

  static T_SHAPE = new Tetromino('.T.\nTTT\n...', 'T')

  static I_SHAPE = new Tetromino('.....\n.....\nIIII.\n.....\n.....', 'I')

  toString() {
    return this.shape.toString()
  }

  rotateRight() {
    return this.shape.rotateRight()
  }

  rotateLeft() {
    return this.shape.rotateLeft()
  }
};
