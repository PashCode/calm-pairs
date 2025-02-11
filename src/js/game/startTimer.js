import { timer } from '../utils/timer.js';
import { GAME_CONFIG, SELECTORS } from './gameState.js';

const resultTimer = timer();

export function updateTimerDisplay() {
  GAME_CONFIG.TIMER.TIMER_ID = setInterval( () => {
    const [ minutes, seconds ] = resultTimer();

    SELECTORS.GAME_TIMER.textContent =
      `${ minutes.toString().padStart( 2, '0' ) }`
      + `:${ seconds.toString().padStart( 2, '0' ) }`;
  }, 100 );
}

