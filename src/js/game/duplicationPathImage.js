import { GAME_STATE } from './gameState.js';
import { choiceLevel } from './choiceLevel.js';

choiceLevel();

export function duplicationPathImage() {
    document.addEventListener('selected-level', (e) => {
        GAME_STATE.gameElements.pathImages = e.detail.flatMap(name => [
            `img/${name}-card.jpg`,
            `img/${name}-card.jpg`
        ]);
    });
}


