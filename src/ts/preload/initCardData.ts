import { nanoid } from 'nanoid';
import { GAME_STATE } from '../gameState';
import { TImageName, IGameElements } from '../types/gameStateTypes';
import { imageCache } from './preloadImages';

export function initCardData(cardsNames: TImageName[]): void {
  GAME_STATE.gameElements = cardsNames.flatMap((name: TImageName): IGameElements[] => {
    const id: string = nanoid(5);
    const path = `img/${name}-card.png`;

    // Клонуємо попередньо завантажені <img>, щоб уникнути повторного завантаження
    const visibleTag = imageCache[path].cloneNode(true) as HTMLImageElement;
    const hiddenTag = imageCache['img/hidden-card.jpg'].cloneNode(true) as HTMLImageElement;

    // Повертаємо по дві картки з однаковими даними
    return [
      { id, path, visibleTag, hiddenTag },
      { id, path, visibleTag, hiddenTag },
    ];
  });
}

