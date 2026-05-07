export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(
      { length: this.height },
      () => Array(this.width).fill("."));
  }

  toString() {
    return this.board.map( (x) => x.join("") ).join("\n") + "\n"
  }

  drop(block) {
    this.board[0][Math.floor(this.width / 2)] = block
    return this
  }
}
