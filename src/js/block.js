export default class Block {
  constructor({ x, y, unitSize, color }) {
    this.x = x;
    this.y = y;
    this.unitSize = unitSize;
    this.color = color;
  }

  serialize() {
    //This will be changed later
    return null;
  }

  getHtmlElement() {
    this.div = document.createElement('div');
    this.div.classList.add('block');
    this.div.classList.add(`block_color_${this.color}`);
    this.div.style.top = `${this.y * this.unitSize}px`;
    this.div.style.left = `${this.x * this.unitSize}px`;
    this.div.style.width = `${this.unitSize}px`;
    this.div.style.height = `${this.unitSize}px`;
    return this.div;
  }
}
