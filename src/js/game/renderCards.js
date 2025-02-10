import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils, elementUtils } from '../utils/domUtils.js';

const { CARDS_CONTAINER, CARD_HIDDEN, CARD_VISIBLE, CARD } = CLASSES;

export function renderCards() {

  GAME_STATE.gameElements.forEach( ( card ) => {
    const createImagesContainer = document.createElement( 'div' );

    const hiddenCard = createCardsImage( 'img/hidden-card.jpg' );
    const visibleCard = createCardsImage( card.path );

    elementUtils.appendElement( createImagesContainer, hiddenCard );

    classUtils.addClass( createImagesContainer, CARDS_CONTAINER );
    elementUtils.appendElement( SELECTORS.CARDS_BOARD_CONTAINER, createImagesContainer );

    card.hiddenTag = hiddenCard;
    card.visibleTag = visibleCard;
  } );
}

function createCardsImage( src ) {
  const createImageTag = document.createElement( 'img' );
  src.includes( 'hidden' )
    ? classUtils.addClass( createImageTag, CARD_HIDDEN, CARD )
    : classUtils.addClass( createImageTag, CARD_VISIBLE, CARD );
  createImageTag.src = src;
  return createImageTag;
}