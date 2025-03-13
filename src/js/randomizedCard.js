import { GAME_CONFIG } from './gameState.js';
import { shuffleCards } from './utils/shuffleCards.js';

export function randomizedCard( quantityCards ) {
  const allCards = shuffleCards( GAME_CONFIG.QUANTITY_CARDS.ALL_CARDS );
  return allCards.slice( 0, quantityCards );
}
