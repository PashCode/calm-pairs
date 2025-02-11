import { timer } from '../../utils/timer.js';
import { GAME_STATE, SELECTORS } from '../gameState.js';

const resultTimer = timer();

export function updateTimerDisplay() {
  GAME_STATE.TIMER.TIMER_ID = setInterval( () => {
    const [ minutes, seconds ] = resultTimer();

    SELECTORS.GAME_TIMER.textContent =
      `${ minutes.toString().padStart( 2, '0' ) }`
      + `:${ seconds.toString().padStart( 2, '0' ) }`;
  }, GAME_STATE.TIMER.TIMER_TICK_INTERVAL );
}

