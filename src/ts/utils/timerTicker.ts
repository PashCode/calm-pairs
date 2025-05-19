import { GAME_STATE } from '../gameState';

export function timerTicker(): () => number[] {
  return (): number[] => {
    GAME_STATE.TIMER.seconds++;

    if ( GAME_STATE.TIMER.seconds === 60 ) {
      GAME_STATE.TIMER.seconds = 0;
      GAME_STATE.TIMER.minutes++;
    }

    return [ GAME_STATE.TIMER.minutes, GAME_STATE.TIMER.seconds ];
  };
}
