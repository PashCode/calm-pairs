import { GAME_STATE, SELECTORS } from '../gameState';

export function clearGameScore(): void {
  const gameTimer = SELECTORS.GAME_TIMER as HTMLSpanElement;
  const mistakesCounter = SELECTORS.GAME_MISTAKES as HTMLSpanElement;

  clearInterval( GAME_STATE.TIMER.timerId );

  GAME_STATE.TIMER.minutes = 0;
  GAME_STATE.TIMER.seconds = 0;
  GAME_STATE.TIMER.finalTime = 0;
  GAME_STATE.mismatchCards = 0;

  gameTimer.textContent = '00:00';
  mistakesCounter.textContent = '0';
}
