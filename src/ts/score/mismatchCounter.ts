import { GAME_STATE, SELECTORS } from '../gameState';

export function incrementMismatchCounter(): void {
  const mistakesCounter = SELECTORS.GAME_MISTAKES as HTMLSpanElement;
  GAME_STATE.mismatchCards++;
  mistakesCounter.textContent = `${ GAME_STATE.mismatchCards }`;
}
