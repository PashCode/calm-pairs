import { GAME_STATE } from '../gameState.js';

export function timer() {
  return () => {
    GAME_STATE.TIMER.seconds++;
    if ( GAME_STATE.TIMER.seconds === 60 ) {
      GAME_STATE.TIMER.seconds = 0;
      GAME_STATE.TIMER.minutes++;
    }

    return [ GAME_STATE.TIMER.minutes, GAME_STATE.TIMER.seconds ];
  };
}




