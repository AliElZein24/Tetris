import './styles/main.scss';
import Tetris from './js/tetris';

(() => {
  const newGameButton = document.querySelector('.tetris__action-button');
  newGameButton.addEventListener('click', startNewGame);
  function startNewGame() {
    const tetris = new Tetris();
    tetris.start();
  }
})();
