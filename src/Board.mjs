export class Board {
  width;
  height;
  board;
  moving;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(
      { length: this.height },
      () => Array(this.width).fill("."));
    this.moving = Array()
  }

  toString() {
    return this.board.map( (x) => x.join("") ).join("\n") + "\n"
  }

  drop(block) {
    if (this.hasFalling()) {
      throw "already falling"
    }
    this.board[0][Math.floor(this.width / 2)] = block
    this.moving.push([0, Math.floor(this.width / 2)])
    return this
  }
  tick() {
    this.moving.forEach((coord) => {
      const block = this.board[coord[0]][coord[1]]
      this.board[coord[0]][coord[1]] = "."
      this.board[coord[0]+1][coord[1]] = block})
    return this
  }
  hasFalling() {
    return this.moving.length > 0
  }
}
