import { shuffleCards } from './utils/shuffleCards';
import { GAME_CONFIG } from './gameState';
import { TImageName } from './types/gameStateTypes';

export function finalCardsCount( quantityCards: number): TImageName[] {
  const allCards: TImageName[] = shuffleCards(GAME_CONFIG.QUANTITY_CARDS.ALL_CARDS); // Перемішуємо всі доступні картки
  return allCards.slice(0, quantityCards); // Забираємо потрібну кількість перемішаних карток для рівня
}
