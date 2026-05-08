import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino {
  tetrominoShape;

  constructor(shapeStr) {
    this.tetrominoShape = RotatingShape.fromString(shapeStr)
  }

  static T_SHAPE = new Tetromino('.T.\nTTT\n...')

  static I_SHAPE = new Tetromino('.....\n.....\nIIII.\n.....\n.....')

  toString() {
    return this.tetrominoShape.toString()
  }

  rotateRight() {
    return this.tetrominoShape.rotateRight()
  }

  rotateLeft() {
    return this.tetrominoShape.rotateLeft()
  }
};
