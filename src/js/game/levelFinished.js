import { CLASSES, GAME_STATE, SELECTORS } from './gameState.js';

export function levelFinished() {
  SELECTORS.CARDS_BOARD_CONTAINER.addEventListener('click', (event) => {
    if (event.target.classList.contains(CLASSES.CARD_HIDDEN)) {
      const res = GAME_STATE.gameElements.every((card) => {
        return card.hiddenTag.classList.contains(CLASSES.MATCHED);
      });

      if (res) {GAME_STATE.TIMER.final_time =
        (GAME_STATE.TIMER.minutes * 60) + GAME_STATE.TIMER.seconds;
        console.log(GAME_STATE.TIMER.final_time);
        clearInterval(GAME_STATE.TIMER.TIMER_ID); // Останавливаем таймер
      }
    }
  });
}


