import { SELECTORS, GAME_CONFIG, GAME_STATE, CLASSES } from './gameState.js';
import { addCardIdAndPath } from './preloadElements/cardIdAndPath.js';
import { addCardTags } from './preloadElements/cardTags.js';
import { shuffleCards } from '../utils/shuffleCards.js';
import { displayCards } from './displayCards.js';
import { addClass } from '../utils/addClass.js';

export function choiceLevel() {
    SELECTORS.ALL_BUTTONS_CONTAINER.childNodes.forEach( ( card ) => {
        card.addEventListener( 'click', ( event ) => {
            const level = event.target.dataset.level;
            addCardIdAndPath( GAME_CONFIG.QUANTITY_CARDS[ level ] );
            addCardTags();
            shuffleCards( GAME_STATE.gameElements );
            displayCards();
            addClass( SELECTORS.ALL_BUTTONS_CONTAINER, CLASSES.ELEMENT_HIDDEN );
        } );
    } );
}

