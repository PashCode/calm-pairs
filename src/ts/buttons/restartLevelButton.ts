import { shuffleCards } from '../utils/shuffleCards';
import { clearGameScore } from '../score/clearGameScore';
import { updateTimerDisplay } from '../score/updateTimerDisplay';
import { clickRestartLevelUI } from '../ui/restartLevel';
import { UIButtonClick } from '../ui/buttonClick';
import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from '../gameState';
import { classUtils, elementUtils } from '../utils/domUtils';
import { IGameElements } from '../types/gameStateTypes';

const {
  ELEMENT_HIDDEN,
  MATCHED,
  CLICKED,
  CARDS_CONTAINER,
  NO_INTERACTION,
} = CLASSES;

export function restartLevelButton( button: HTMLButtonElement ): void {
  const boardContainer = SELECTORS.BOARD as HTMLDivElement;

  if ( boardContainer && button ) {
    button.addEventListener( 'click', (): void => {
      clickRestartLevelUI(); // Оновлення інтерфейсу при рестарті рівня
      clearGameScore();

      setTimeout( (): void => {
        elementUtils.clearActiveChoice();
        elementUtils.clearCardsContainer( SELECTORS.CARDS_CONTAINER );
        updateTimerDisplay();

        shuffleCards( GAME_STATE.gameElements ).forEach( ( card: IGameElements ): void => {
          classUtils.removeClass(
            card.hiddenTag,
            ELEMENT_HIDDEN,
            MATCHED,
            CLICKED,
            NO_INTERACTION,
          );

          const createImagesContainer: HTMLDivElement = document.createElement( 'div' );
          classUtils.addClass( createImagesContainer, CARDS_CONTAINER );

          boardContainer.append( createImagesContainer );

          elementUtils.appendElement( createImagesContainer, card.hiddenTag );
        } );
      }, GAME_CONFIG.RESTART_BUTTON_UI_DELAY ); // Затримка для плавного перезапуску

      UIButtonClick( 200, button ); // Анімація кнопки при натисканні
    } );
  }
}
