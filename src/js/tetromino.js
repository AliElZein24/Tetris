import Block from './block';

export default class Tetromino {
  constructor({ x, y, playingField, rotation, unitSize }) {
    this.x = x;
    this.y = y;
    this.playingField = playingField;
    this.rotation = rotation;
    this.unitSize = unitSize;
    this.blocks = this.createBlocks();
  }

  createBlocks() {
    let options = this.constructor.blockOptions[this.rotation];
    console.log('y', this.y);
    const blocks = options.map(
      (item) =>
        new Block({
          x: item.x + this.x,
          y: item.y + this.y,
          unitSize: 20,
          color: this.constructor.color,
        })
    );
    return blocks;
  }

  draw() {
    this.blocks.forEach((block) => {
      this.playingField.append(block.getHtmlElement());
    });
  }

  clear() {
    this.blocks.forEach((block) => {
      this.playingField.removeChild(block.div);
    });
  }

  moveDown() {
    const previousY = this.y;
    this.clear();
    this.y++;
    const blocks = this.createBlocks();
    if (this.checkCollision(blocks)) {
      this.y = previousY;
      this.draw();
      return false;
    }
    this.blocks = blocks;
    this.draw();
    return true;
  }

  checkCollision(blocks) {
    for (const block of blocks) {
      if (block.y > 19) {
        return true;
      }
    }
    return false;
  }
}
