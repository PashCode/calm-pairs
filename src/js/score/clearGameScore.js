import { GAME_STATE, SELECTORS } from '../gameState.js';

export function clearGameScore() {
  clearInterval( GAME_STATE.TIMER.TIMER_ID );
  setTimeout( () => {
    GAME_STATE.TIMER.minutes = 0;
    GAME_STATE.TIMER.seconds = 0;
    GAME_STATE.TIMER.final_time = 0;
    GAME_STATE.mismatch_cards = 0;
    SELECTORS.GAME_TIMER.textContent = '00:00';
    SELECTORS.GAME_MISTAKES.textContent = '0';
  });
}
