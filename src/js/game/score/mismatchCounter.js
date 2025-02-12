import { GAME_STATE, SELECTORS } from '../gameState.js';

export function incrementMismatchCounter() {
  GAME_STATE.mismatch_cards++;
  SELECTORS.GAME_MISTAKES.textContent = `${ GAME_STATE.mismatch_cards }`;
}
