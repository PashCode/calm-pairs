import { CLASSES, SELECTORS } from './gameState.js';
import { classUtils, elementUtils } from '../utils/domUtils.js';

export function anotherLevelButton() {
  SELECTORS.ANOTHER_LEVEL_BUTTON.addEventListener( 'click', () => {
    elementUtils.clearGameElements();
    elementUtils.clearActiveChoice();
    elementUtils.clearContainer( SELECTORS.CARDS_BOARD_CONTAINER );
    classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN );
  } );
}
