import { GAME_STATE, CLASSES } from '../gameState.js';

export function addCardTags() {
    GAME_STATE.gameElements.forEach( card => {
        const visibleTag = createImg( card.path, CLASSES.CARD_VISIBLE );
        const hiddenTag = createImg( 'img/hidden-card.jpg', CLASSES.CARD_HIDDEN );

        card.visibleTag = visibleTag;
        card.hiddenTag = hiddenTag;
    } );
}

function createImg( src, className ) {
    const img = document.createElement( 'img' );
    img.src = src;
    img.className = className;
    return img;
}

