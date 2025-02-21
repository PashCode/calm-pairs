import { classUtils, elementUtils } from '../../utils/domUtils.js';
import { GAME_CONFIG, SELECTORS } from '../gameState.js';

export function loadingScreen() {
  classUtils.addClass( SELECTORS.LOAD_SCREEN );
  setTimeout( () => {
    elementUtils.removeElement( SELECTORS.LOAD_SCREEN );
  }, GAME_CONFIG.LOADING_DURATION );
}
