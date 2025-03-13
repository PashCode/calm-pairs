import { GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { UI_LEVEL_BUTTONS } from './ui/uiActions.js';
import { addCardIdAndPath } from './preload/cardIdAndPath.js';
import { shuffleCards } from './utils/shuffleCards.js';
import { renderCards } from './renderCards.js';
import { clickLevelButtonUI } from './ui/levelButtons.js';
import { randomizedCard } from './randomizedCard.js';
import { updateTimerDisplay } from './score/updateTimerDisplay.js';
import { boardTransform } from './ui/boardTransform.js';


export function choiceLevel() {
  SELECTORS.CHOICE_LEVEL_CONTAINER.childNodes.forEach( ( levelButton ) => {
    levelButton.addEventListener( 'click', ( event ) => {
      GAME_CONFIG.SOUND_CHOICE_LEVEL_CLICK.play();

      GAME_STATE.chooseLevel = event.target.dataset.level.toUpperCase();
      const quantityCards = GAME_CONFIG.QUANTITY_CARDS[ GAME_STATE.chooseLevel ].length;
      setTimeout( () => boardTransform(), 2000 );
      clickLevelButtonUI( levelButton );
      addCardIdAndPath( randomizedCard( quantityCards ) );
      shuffleCards( GAME_STATE.gameElements );
      setTimeout( () => {
        renderCards();
        updateTimerDisplay();
      }, GAME_CONFIG.MOBILE_SIZE_SCREEN ? 3850 : 2400 );
      UI_LEVEL_BUTTONS.expandBoardLayout();
    } );
  } );
}

