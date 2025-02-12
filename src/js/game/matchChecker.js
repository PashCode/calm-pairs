import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';
import { resultHandler } from './resultHandler.js';
import { stopAndSaveTime } from './score/stopAndSaveTime.js';

export function checkAllCardsMatched() {
  SELECTORS.CARDS_BOARD_CONTAINER.addEventListener( 'click', ( event ) => {
    if ( event.target.classList.contains( CLASSES.CARD_HIDDEN ) ) {
      const allCardsMatched = GAME_STATE.gameElements.every( ( card ) => {
        return card.hiddenTag.classList.contains( CLASSES.MATCHED );
      } );

      if ( allCardsMatched ) {
        stopAndSaveTime();
        resultHandler();

        console.log( 2 );
      }
    }
  } );
}


