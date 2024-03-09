import I from './js/i';
import Z from './js/z';
import './styles/main.scss';

(() => {
  const playingField = document.querySelector('.js-playing-field');
  const iShape = new I({
    x: 2,
    y: 0,
    playingField,
    rotation: 0,
    unitSize: 20,
  });
  const zshape = new Z({
    x: 4,
    y: 6,
    playingField,
    rotation: 0,
    unitSize: 20,
  });
  iShape.draw();
  zshape.draw();
})();
