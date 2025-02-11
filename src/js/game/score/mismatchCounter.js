import { GAME_STATE, SELECTORS } from '../gameState.js';

export function mismatchCounter() {
  SELECTORS.GAME_MISTAKES.textContent = `${ GAME_STATE.mismatch_cards }`;
}
