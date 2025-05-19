import { UIButtonClick } from './buttonClick';
import { UI_LEVEL_BUTTONS } from './uiActions';
import { GAME_CONFIG } from '../gameState';

export function clickLevelButtonUI( button: HTMLButtonElement ): void {
  UI_LEVEL_BUTTONS.activeGameAddNoClick();
  UI_LEVEL_BUTTONS.levelButtonsAddHidden( 1200 );
  UI_LEVEL_BUTTONS.expandBoardAndAdaptUI( 1300 );
  UI_LEVEL_BUTTONS.activeGameRemoveHidden( 2500 );
  UI_LEVEL_BUTTONS.activeGameRemoveOpacity( 3000 );
  UI_LEVEL_BUTTONS.activeGameRemoveNoClick( GAME_CONFIG.MOBILE_SIZE_SCREEN ? 4500 : 2000 );
  UI_LEVEL_BUTTONS.levelButtonsAddNoClickAndOpacity();

  UIButtonClick( 200, button );
}
