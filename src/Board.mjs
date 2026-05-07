export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    return Array(this.height).fill(Array(this.width).fill(".")).map( (x) => x.join("") ).join("\n") + "\n"
  }
}
