import { GAME_STATE } from '../gameState';

export function setFinalTime(): void {
  GAME_STATE.TIMER.finalTime =
    ( GAME_STATE.TIMER.minutes * 60 ) + GAME_STATE.TIMER.seconds;
}
