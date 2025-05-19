import { resultHandler } from './resultHandler';
import { clearGameScore } from './score/clearGameScore';
import { setFinalTime } from './score/setFinalTime';
import { displayResult } from './score/displayResult';
import { matchedCardsUI } from './ui/matchedCards';
import { elementUtils } from './utils/domUtils';
import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState';
import { IGameElements } from './types/gameStateTypes';

export function checkAllCardsMatched(): void {

  if (SELECTORS.BOARD instanceof HTMLDivElement) {
    SELECTORS.BOARD.addEventListener('click', (event: MouseEvent): void => {
      if (event.target instanceof HTMLImageElement) { // Перевірка, чи клікнули на видиму картку
        const allCardsMatched: boolean = GAME_STATE.gameElements.every((card: IGameElements): boolean => {
          return card.hiddenTag.classList.contains(CLASSES.MATCHED);
        });

        if (allCardsMatched) {
          matchedCardsUI();

          setTimeout((): void => { // Затримка перед очищенням контейнера карток
            elementUtils.clearCardsContainer(SELECTORS.CARDS_CONTAINER);
          }, GAME_CONFIG.ALL_CARDS_MATCHED_DELAY);

          setFinalTime();
          displayResult();
          resultHandler();
          clearGameScore();
        }
      }
    });
  }
}
