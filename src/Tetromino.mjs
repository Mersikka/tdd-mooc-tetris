import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino {
  tetromino;

  constructor(tetrominoShape) {
    this.tetromino = RotatingShape.fromString(tetrominoShape)
  }

  static T_SHAPE = new Tetromino('.T.\nTTT\n...')

  toString() {
    return this.tetromino.toString()
  }

  rotateRight() {
    return this.tetromino.rotateRight()
  }

  rotateLeft() {
    return this.tetromino.rotateLeft()
  }
};
