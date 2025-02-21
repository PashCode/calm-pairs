import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';
import { resultHandler } from './resultHandler.js';
import { clearGameScore } from './score/clearGameScore.js';
import { setFinalTime } from './score/setFinalTime.js';
import { resultsScreen } from './score/resultsScreen.js';
import { classUtils } from '../utils/domUtils.js';

export function checkAllCardsMatched() {
  SELECTORS.CARDS_BOARD_CONTAINER.addEventListener( 'click', ( event ) => {
    if ( event.target.classList.contains( CLASSES.CARD_HIDDEN ) ) {
      const allCardsMatched = GAME_STATE.gameElements.every( ( card ) => {
        return card.hiddenTag.classList.contains( CLASSES.MATCHED );
      } );

      if ( allCardsMatched ) {
        classUtils.addClass(SELECTORS.GAME_BOARD_CONTAINER, CLASSES.ELEMENT_HIDDEN)
        classUtils.removeClass(SELECTORS.SCOREBOARD_SCREEN, CLASSES.ELEMENT_HIDDEN)
        setFinalTime();
        resultsScreen()
        resultHandler();
        clearGameScore(); // сделать єто после клика на кнопку новой игры на финальном экране или после задержки, когда финальный экран отобразится
      }
    }
  } );
}


