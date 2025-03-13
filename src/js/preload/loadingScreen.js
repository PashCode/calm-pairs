import { classUtils, elementUtils } from '../utils/domUtils.js';
import { CLASSES, GAME_CONFIG, SELECTORS } from '../gameState.js';

export function loadingScreen() {
  classUtils.addClass( SELECTORS.LOAD_SCREEN, CLASSES.NO_VISIBLE );
  setTimeout( () => {
    classUtils.removeClass(SELECTORS.BOARD, CLASSES.NO_VISIBLE, CLASSES.ELEMENT_HIDDEN)
    classUtils.removeClass(SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_VISIBLE, CLASSES.ELEMENT_HIDDEN)
    elementUtils.removeElement( SELECTORS.LOAD_SCREEN );
  }, GAME_CONFIG.LOADING_DURATION );
}
