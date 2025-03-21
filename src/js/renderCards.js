import { classUtils, elementUtils } from './utils/domUtils.js';
import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';

const { CARDS_CONTAINER, CARD_HIDDEN, CARD_VISIBLE, CARD } = CLASSES;

export function renderCards() {

  // Перебираємо всі елементи гри для створення карт
  GAME_STATE.gameElements.forEach( ( card ) => {
    const createImagesContainer = document.createElement( 'div' );

    const hiddenCard = createCardsImage( 'img/hidden-card.jpg' );
    const visibleCard = createCardsImage( card.path );

    elementUtils.appendElement( createImagesContainer, hiddenCard );

    classUtils.addClass( createImagesContainer, CARDS_CONTAINER );
    elementUtils.appendElement( SELECTORS.BOARD, createImagesContainer );

    hiddenCard.alt = 'hidden-card';
    visibleCard.alt = `visible-card`;

    card.hiddenTag = hiddenCard;
    card.visibleTag = visibleCard;
  } );
}

function createCardsImage( src ) {
  const createImageTag = document.createElement( 'img' );

  // Додавання відповідного класу для прихованої чи видимої картки
  src.includes( 'hidden' )
    ? classUtils.addClass( createImageTag, CARD_HIDDEN, CARD )
    : classUtils.addClass( createImageTag, CARD_VISIBLE, CARD );

  createImageTag.src = src;
  return createImageTag;
}
