import { GAME_STATE } from '../gameState.js';

export function stopAndSaveTime() {
  GAME_STATE.TIMER.final_time =
    ( GAME_STATE.TIMER.minutes * 60 ) + GAME_STATE.TIMER.seconds;
  clearInterval( GAME_STATE.TIMER.TIMER_ID );
}
