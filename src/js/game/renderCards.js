import { GAME_STATE, CLASSES, SELECTORS } from './gameState.js';

export function renderCards() {
    GAME_STATE.gameElements.forEach( ( card ) => {
        renderCardsImage( 'img/hidden-card.jpg' );
        renderCardsImage( card.path );
    } );
}

function renderCardsImage( src ) {
    const createImageTag = document.createElement( 'img' );
    createImageTag.src = src;
    SELECTORS.CARDS_BOARD_CONTAINER.append( createImageTag );
}


