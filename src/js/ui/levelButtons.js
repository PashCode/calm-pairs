import { UI_ALL_BUTTONS, UI_LEVEL_BUTTONS } from './uiActions.js';
import { GAME_CONFIG } from '../gameState.js';

export function clickLevelButtonUI( button ) {
  UI_LEVEL_BUTTONS.activeGameAddNoClick();
  UI_LEVEL_BUTTONS.activeGameRemoveNoClick( GAME_CONFIG.MOBILE_SIZE_SCREEN ? 4500 : 2000 );
  UI_LEVEL_BUTTONS.expandBoardAndAdaptUI( 1300 );
  UI_LEVEL_BUTTONS.activeGameRemoveHidden( 2500 );
  UI_LEVEL_BUTTONS.activeGameRemoveOpacity( 3000 );
  UI_LEVEL_BUTTONS.levelButtonsAddNoClickAndOpacity();
  UI_LEVEL_BUTTONS.levelButtonsAddHidden( 1200 );

  UI_ALL_BUTTONS.buttonDown( button );
  UI_ALL_BUTTONS.buttonUp( 200, button );
}
