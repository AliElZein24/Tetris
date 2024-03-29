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
}
