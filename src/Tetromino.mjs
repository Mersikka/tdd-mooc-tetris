import { RotatingShape } from '../src/RotatingShape.mjs';

export class Tetromino extends RotatingShape {
  static T_SHAPE = Tetromino.fromString('.T.\nTTT\n...')
};
