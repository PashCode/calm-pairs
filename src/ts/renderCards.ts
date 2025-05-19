import { classUtils, elementUtils } from './utils/domUtils';
import { CLASSES, GAME_STATE, SELECTORS } from './gameState';
import { IGameElements } from './types/gameStateTypes';

const { CARDS_CONTAINER, CARD_HIDDEN, CARD_VISIBLE, CARD } = CLASSES;

export function renderCards(): void {
  // Перебираємо всі елементи гри для створення карт
  if ( GAME_STATE.gameElements ) {
    GAME_STATE.gameElements.forEach( ( cardData: IGameElements ): void => {
      const createImagesContainer: HTMLDivElement = document.createElement( 'div' );

      const hiddenCard: HTMLImageElement = createCardsImage( 'img/hidden-card.jpg' );
      const visibleCard: HTMLImageElement = createCardsImage( cardData.path );

      elementUtils.appendElement( createImagesContainer, hiddenCard );

      classUtils.addClass( createImagesContainer, CARDS_CONTAINER );
      if ( SELECTORS.BOARD ) {
        elementUtils.appendElement( SELECTORS.BOARD, createImagesContainer );
      }

      hiddenCard.alt = 'hidden-card';
      visibleCard.alt = `visible-card`;

      // Зберігаємо зображення в об'єкті картки
      cardData.hiddenTag = hiddenCard;
      cardData.visibleTag = visibleCard;
    } );
  }
}

function createCardsImage( src: string ): HTMLImageElement {
  const createImageTag: HTMLImageElement = document.createElement( 'img' );

  // Додавання відповідного класу для прихованої чи видимої картки
  src.includes( 'hidden' )
    ? classUtils.addClass( createImageTag, CARD_HIDDEN, CARD )
    : classUtils.addClass( createImageTag, CARD_VISIBLE, CARD );

  createImageTag.src = src;
  return createImageTag;
}
