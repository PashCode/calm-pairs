import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils } from '../utils/domUtils.js';
import { addCardIdAndPath } from './preload/cardIdAndPath.js';
import { shuffleCards } from '../utils/shuffleCards.js';
import { renderCards } from './renderCards.js';
import { updateTimerDisplay } from './score/updateTimerDisplay.js';

export function choiceLevel() {
  SELECTORS.CHOICE_LEVEL_CONTAINER.childNodes.forEach( ( levelButton ) => {
    levelButton.addEventListener( 'click', ( event ) => {
      GAME_STATE.chooseLevel = event.target.dataset.level.toUpperCase();
      addCardIdAndPath( GAME_CONFIG.QUANTITY_CARDS[ GAME_STATE.chooseLevel ] );
      shuffleCards( GAME_STATE.gameElements );
      renderCards();
      updateTimerDisplay()
      classUtils.addClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN );
    } );
  } );
}

