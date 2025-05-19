import { timerTicker } from '../utils/timerTicker';
import { GAME_STATE, SELECTORS } from '../gameState';

const getTimerValues: () => number[] = timerTicker();

export function updateTimerDisplay(): void {
  const gameTimer = SELECTORS.GAME_TIMER as HTMLSpanElement;

  // Оновлюємо таймер кожну певну кількість мілісекунд
  GAME_STATE.TIMER.timerId = setInterval( (): void => {
    const [ minutes, seconds ] = getTimerValues();

    // Оновлюємо відображення таймера на екрані
    gameTimer.textContent =
      `${ minutes.toString().padStart( 2, '0' ) }`
      + `:${ seconds.toString().padStart( 2, '0' ) }`;
  }, GAME_STATE.TIMER.TIMER_TICK_INTERVAL );
}
