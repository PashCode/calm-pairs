import { GAME_CONFIG } from '../game/gameState.js';

export function timer() {
  return () => {
    GAME_CONFIG.TIMER.seconds++;
    if ( GAME_CONFIG.TIMER.seconds === 60 ) {
      GAME_CONFIG.TIMER.seconds = 0;
      GAME_CONFIG.TIMER.minutes++;
    }

    return [ GAME_CONFIG.TIMER.minutes, GAME_CONFIG.TIMER.seconds ];
  };
}




