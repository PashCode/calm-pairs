import { GAME_STATE } from '../gameState.js';
import { nanoid } from 'nanoid';

export function addCardIdAndPath( cardsNames ) {
    GAME_STATE.gameElements = cardsNames.flatMap( ( name ) => {
        const id = nanoid( 5 );
        return [
            { path: `img/${ name }-card.jpg`, id },
            { path: `img/${ name }-card.jpg`, id },
        ];
    } );
}

