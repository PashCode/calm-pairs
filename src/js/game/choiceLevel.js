import { SELECTORS, GAME_CONFIG, GAME_STATE } from './gameState.js';
import { addCardIdAndPath } from './preloadElements/cardIdAndPath.js';
import { addCardTags } from './preloadElements/cardTags.js';

export function choiceLevel() {
    SELECTORS.ALL_BUTTONS_CONTAINER.childNodes.forEach( ( card ) => {
        card.addEventListener( 'click', ( event ) => {
            const level = event.target.dataset.level;
            addCardIdAndPath( GAME_CONFIG.QUANTITY_CARDS[ level ] );
            addCardTags();
            console.log( GAME_STATE );
        } );
    } );
}

