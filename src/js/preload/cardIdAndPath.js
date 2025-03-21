import { nanoid } from 'nanoid';
import { GAME_STATE } from '../gameState.js';

export function addCardIdAndPath(cardsNames) {
    GAME_STATE.gameElements = cardsNames.flatMap((name) => {
        const id = nanoid(5); // Генеруємо унікальний ID для кожної пари карт
        return [
            { path: `img/${name}-card.png`, id },
            { path: `img/${name}-card.png`, id },
        ];
    });
}

