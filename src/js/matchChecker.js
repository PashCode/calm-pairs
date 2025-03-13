import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';
import { resultHandler } from './resultHandler.js';
import { clearGameScore } from './score/clearGameScore.js';
import { setFinalTime } from './score/setFinalTime.js';
import { resultsScreen } from './score/resultsScreen.js';
import { elementUtils } from './utils/domUtils.js';
import { matchedCardsUI } from './ui/matchedCards.js';

export function checkAllCardsMatched() {

  SELECTORS.BOARD.addEventListener( 'click', ( event ) => {
    if ( event.target.classList.contains( CLASSES.CARD_HIDDEN ) ) {
      const allCardsMatched = GAME_STATE.gameElements.every( ( card ) => {
        return card.hiddenTag.classList.contains( CLASSES.MATCHED );
      } );
      
      if ( allCardsMatched ) {
        matchedCardsUI();
        setTimeout( () => {
          elementUtils.clearCardsContainer( SELECTORS.CARDS_CONTAINER );
        }, 1000 );
        setFinalTime();
        resultsScreen();
        resultHandler();
        clearGameScore();
      }
    }
  } );
}


