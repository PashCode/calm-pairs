import { GAME_STATE } from '../gameState.js';

export function setFinalTime() {
  GAME_STATE.TIMER.final_time =
    ( GAME_STATE.TIMER.minutes * 60 ) + GAME_STATE.TIMER.seconds;
}
