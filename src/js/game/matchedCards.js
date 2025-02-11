import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';

export function matchedCards() {
  SELECTORS.CARDS_BOARD_CONTAINER.addEventListener('click', (event) => {
    if (event.target.classList.contains(CLASSES.CARD_HIDDEN)) {
      const res = GAME_STATE.gameElements.every((card) => {
        return card.hiddenTag.classList.contains(CLASSES.MATCHED);
      });

      if (res) {
        GAME_CONFIG.TIMER.final_time =
          (GAME_CONFIG.TIMER.minutes * 60) + GAME_CONFIG.TIMER.seconds;
        console.log(GAME_CONFIG.TIMER.final_time);
        clearInterval(GAME_CONFIG.TIMER.TIMER_ID); // Останавливаем таймер
      }
    }
  });
}


