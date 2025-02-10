import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils } from '../utils/domUtils.js';
import { addCardIdAndPath } from './preloadElements/cardIdAndPath.js';
import { shuffleCards } from '../utils/shuffleCards.js';
import { renderCards } from './renderCards.js';

export function choiceLevel() {
  SELECTORS.CHOICE_LEVEL_CONTAINER.childNodes.forEach( ( card ) => {
    card.addEventListener( 'click', ( event ) => {
      const level = event.target.dataset.level;
      addCardIdAndPath( GAME_CONFIG.QUANTITY_CARDS[ level ] );
      shuffleCards( GAME_STATE.gameElements );
      renderCards();
      classUtils.addClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN );
    } );
  } );
}

