import { GAME_STATE, CLASSES, SELECTORS } from './gameState.js';
import { addClass } from '../utils/addClass.js';

export function renderCards() {
    GAME_STATE.gameElements.forEach( ( card ) => {
        const createImagesContainer = document.createElement( 'div' );
        createImagesContainer.append(
            createCardsImage( 'img/hidden-card.jpg' ),
            createCardsImage( card.path ),
        );

        addClass(createImagesContainer, CLASSES.CARDS_CONTAINER)
        SELECTORS.CARDS_BOARD_CONTAINER.append( createImagesContainer );

    } );
}

function createCardsImage( src ) {
    const createImageTag = document.createElement( 'img' );
    src.includes( 'hidden' )
        ? addClass( createImageTag, CLASSES.CARD_HIDDEN )
        : addClass( createImageTag, CLASSES.CARD_VISIBLE );
    createImageTag.src = src;
    return createImageTag;
}


