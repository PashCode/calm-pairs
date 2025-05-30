import { elementUtils } from '../utils/domUtils';
import { UI_ANOTHER_LEVEL_BUTTON, UI_CARDS_CONTAINER, UI_NEW_GAME_BUTTON } from './uiActions';
import { SELECTORS } from '../gameState';

export function clickHandleLevelButtonUI(): void {
  UI_ANOTHER_LEVEL_BUTTON.backgroundBlurRemove();
  UI_ANOTHER_LEVEL_BUTTON.activeGameAddNoClick();
  UI_ANOTHER_LEVEL_BUTTON.levelButtonsRemoveHidden();
  UI_ANOTHER_LEVEL_BUTTON.activeGameAdaptUI();
  UI_ANOTHER_LEVEL_BUTTON.activeGameAddOpacity();
  UI_ANOTHER_LEVEL_BUTTON.resetBoardPosition( 600 );
  UI_ANOTHER_LEVEL_BUTTON.activeGameAddHidden( 1000 );
  UI_ANOTHER_LEVEL_BUTTON.expandBoardReset( 1000 );
  UI_ANOTHER_LEVEL_BUTTON.levelButtonsRemoveNoClickAndOpacity( 2000 );
  UI_ANOTHER_LEVEL_BUTTON.activeGameRemoveNoClick( 2000 );

  UI_CARDS_CONTAINER.cardsContainerAddOpacity();
  UI_CARDS_CONTAINER.cardsContainerRemoveOpacity( 700 );
  setTimeout( (): void => {
    elementUtils.clearCardsContainer( SELECTORS.CARDS_CONTAINER );
  }, 700 );

  UI_NEW_GAME_BUTTON.scoreboardAddOpacity();
  UI_NEW_GAME_BUTTON.scoreboardAddHidden( 1000 );
}
