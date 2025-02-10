import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';
import { shuffleCards } from '../utils/shuffleCards.js';
import { classUtils, elementUtils } from '../utils/domUtils.js';

const { ELEMENT_HIDDEN, MATCHED, CLICKED, CARDS_CONTAINER } = CLASSES;

export function restartLevelButton() {

  SELECTORS.RESTART_LEVEL_BUTTON.addEventListener( 'click', () => {
    elementUtils.clearActiveChoice();
    elementUtils.clearContainer( SELECTORS.CARDS_BOARD_CONTAINER );

    shuffleCards( GAME_STATE.gameElements ).forEach( ( card ) => {
      classUtils.removeClass( card.hiddenTag, ELEMENT_HIDDEN, MATCHED, CLICKED );

      const createImagesContainer = document.createElement( 'div' );
      classUtils.addClass( createImagesContainer, CARDS_CONTAINER );

      SELECTORS.CARDS_BOARD_CONTAINER.append( createImagesContainer );

      setTimeout( () =>
        elementUtils.appendElement( createImagesContainer, card.hiddenTag ), 500 );
    } );
  } );
}

