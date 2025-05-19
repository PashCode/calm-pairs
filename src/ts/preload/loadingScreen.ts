import { classUtils, elementUtils } from '../utils/domUtils';
import { CLASSES, GAME_CONFIG, SELECTORS } from '../gameState';

export function loadingScreen(): void {
  const loadScreen = SELECTORS.LOAD_SCREEN as HTMLDivElement;
  const board = SELECTORS.BOARD as HTMLDivElement;
  const choiceLevelContainer = SELECTORS.CHOICE_LEVEL_CONTAINER as HTMLDivElement;

  classUtils.addClass( loadScreen, CLASSES.NO_VISIBLE ); // Плавне зникнення

  setTimeout( (): void => {
    classUtils.removeClass( board, CLASSES.NO_VISIBLE, CLASSES.ELEMENT_HIDDEN );
    classUtils.removeClass( choiceLevelContainer, CLASSES.NO_VISIBLE, CLASSES.ELEMENT_HIDDEN );
    elementUtils.removeElement( loadScreen );
  }, GAME_CONFIG.LOADING_DURATION );
}
