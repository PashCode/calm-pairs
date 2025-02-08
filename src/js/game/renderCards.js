import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils } from '../utils/domUtils.js';

export function renderCards() {
  GAME_STATE.gameElements.forEach( ( card ) => {
    const createImagesContainer = document.createElement( 'div' );

    const hiddenCard = createCardsImage( 'img/hidden-card.jpg' );
    const visibleCard = createCardsImage( card.path );

    createImagesContainer.append( hiddenCard );

    classUtils.addClass( createImagesContainer, CLASSES.CARDS_CONTAINER );
    SELECTORS.CARDS_BOARD_CONTAINER.append( createImagesContainer );

    card.hiddenTag = hiddenCard;
    card.visibleTag = visibleCard;
  } );
}

function createCardsImage( src ) {
  const createImageTag = document.createElement( 'img' );
  src.includes( 'hidden' )
    ? classUtils.addClass( createImageTag, CLASSES.CARD_HIDDEN, CLASSES.CARD )
    : classUtils.addClass( createImageTag, CLASSES.CARD_VISIBLE, CLASSES.CARD );
  createImageTag.src = src;
  return createImageTag;
}