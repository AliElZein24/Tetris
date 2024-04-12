import Z from './z';
import J from './j';
import L from './l';
import O from './o';
import S from './s';
import T from './t';
import I from './i';
const shapes = [I, Z, J, L, O, S, T];

export default class Tetris {
  constructor({ playingField }) {
    this.playingField = playingField;
  }

  getRandomShape() {
    const RandomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const shape = new RandomShape({
      x: Math.floor(this.playingField.clientWidth / 20 / 2) - 1,
      y: 0,
      playingField: this.playingField, // Corrected to use this.playingField
      rotation: 0,
      unitSize: 20,
    });
    return shape;
  }
}
