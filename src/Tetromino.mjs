import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino {
  tetromino;

  constructor(tetrominoShape) {
    this.tetromino = RotatingShape.fromString(tetrominoShape)
  }

  toString() {
    return this.tetromino.toString()
  }

  static T_SHAPE = new Tetromino('.T.\nTTT\n...')

};
