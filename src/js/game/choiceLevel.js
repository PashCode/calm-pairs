import { SELECTORS, GAME_CONFIG } from './gameState.js';

export function choiceLevel() {
    SELECTORS.ALL_BUTTONS_CONTAINER.childNodes.forEach( (card) => {
        card.addEventListener( 'click', ( event ) => {
            const level = event.target.dataset.level;
            if ( level ) {
                document.dispatchEvent( new CustomEvent( 'selected-level', {
                    detail: GAME_CONFIG.QUANTITY_CARDS[ level ],
                } ) );
            }
        } );
    } );
}