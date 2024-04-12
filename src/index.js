import './styles/main.scss';
import Tetris from './js/tetris';

(() => {
  const playingField = document.querySelector('.js-playing-field');
  function clearPlayingField() {
    if (playingField) {
      playingField.innerHTML = '';
    }
  }
  const newGameButton = document.querySelector('.tetris__action-button');
  newGameButton.addEventListener('click', startNewGame);
  function startNewGame() {
    clearPlayingField();

    const tetris = new Tetris({ playingField });
    const shape = tetris.getRandomShape();

    shape.draw();
    shape.move();
  }
})();
