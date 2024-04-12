import Z from './z';
import J from './j';
import L from './l';
import O from './o';
import S from './s';
import T from './t';
import I from './i';
const shapes = [I, Z, J, L, O, S, T];

export default class Tetris {
  getRandomShape() {
    const RandomShape = shapes[Math.floor(Math.random() * shapes.length)];
    return new RandomShape({
      x: 4,
      y: -2,
      playingField: this.elements.playingField,
      rotation: 0,
      unitSize: 20,
    });
  }
  get elements() {
    return {
      playingField: document.querySelector('.js-playing-field'),
    };
  }
  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), time);
    });
  }
  start() {
    this.shape = this.getRandomShape();
    this.drawShape();
  }
  drawShape() {
    this.shape.draw();
    this.moveCurrentShape();
  }
  async moveCurrentShape() {
    if (!this.shape.moveDown()) {
      return;
    }
    await this.sleep(700);
    this.moveCurrentShape();
  }
}
