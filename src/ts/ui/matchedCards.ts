import { UI_CARDS_CONTAINER, UI_MATCHED_CARDS } from './uiActions';
import { GAME_CONFIG } from '../gameState';

export function matchedCardsUI(): void {
  UI_MATCHED_CARDS.backgroundBlurAdd();
  UI_MATCHED_CARDS.scoreboardRemoveHidden();
  UI_MATCHED_CARDS.activeGameAddOpacity();
  UI_MATCHED_CARDS.resetBoardPosition( 600 );
  UI_MATCHED_CARDS.activeGameAddHidden( 1000 );
  UI_MATCHED_CARDS.scoreboardRemoveOpacity( GAME_CONFIG.MOBILE_SIZE_SCREEN ? 1800 : 1000 );

  UI_CARDS_CONTAINER.cardsContainerAddOpacity();
}
