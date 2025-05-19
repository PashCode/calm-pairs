import { UI_CARDS_CONTAINER, UI_RESTART_BUTTON } from './uiActions';

export function clickRestartLevelUI(): void {
  UI_RESTART_BUTTON.activeGameAddNoClick();
  UI_RESTART_BUTTON.activeGameRemoveNoClick( 2000 );

  UI_CARDS_CONTAINER.cardsContainerAddOpacity();
  UI_CARDS_CONTAINER.cardsContainerRemoveOpacity( 700 );
}

