import { duplicationPathImage } from './js/game/duplicationPathImage.js';
import { GAME_STATE } from './js/game/gameState.js';

duplicationPathImage();

document.addEventListener( 'selected-level', () => {
    console.log( GAME_STATE.gameElements );
} );