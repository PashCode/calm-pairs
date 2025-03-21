import { timer } from '../utils/timer.js';
import { GAME_STATE, SELECTORS } from '../gameState.js';

const resultTimer = timer();

export function updateTimerDisplay() {
  // Оновлюємо таймер кожну певну кількість мілісекунд
  GAME_STATE.TIMER.TIMER_ID = setInterval( () => {
    const [ minutes, seconds ] = resultTimer();

    // Оновлюємо відображення таймера на екрані
    SELECTORS.GAME_TIMER.textContent =
      `${ minutes.toString().padStart( 2, '0' ) }`
      + `:${ seconds.toString().padStart( 2, '0' ) }`;
  }, GAME_STATE.TIMER.TIMER_TICK_INTERVAL );
}

