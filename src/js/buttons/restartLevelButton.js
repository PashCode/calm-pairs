import { shuffleCards } from '../utils/shuffleCards.js';
import { clearGameScore } from '../score/clearGameScore.js';
import { updateTimerDisplay } from '../score/updateTimerDisplay.js';
import { clickRestartLevelUI } from '../ui/restartLevel.js';
import { UIButtonClick } from '../ui/buttonClick.js';
import { CLASSES, GAME_STATE, SELECTORS } from '../gameState.js';
import { classUtils, elementUtils } from '../utils/domUtils.js';

const { ELEMENT_HIDDEN, MATCHED, CLICKED, CARDS_CONTAINER, NO_INTERACTION } = CLASSES;

export function restartLevelButton(button) {
  SELECTORS.RESTART_LEVEL_BUTTON.addEventListener('click', () => {
    clickRestartLevelUI(); // Оновлення UI при перезапуску рівня

    setTimeout(() => {
      elementUtils.clearActiveChoice();
      elementUtils.clearCardsContainer(SELECTORS.CARDS_CONTAINER);

      shuffleCards(GAME_STATE.gameElements).forEach((card) => {
        classUtils.removeClass(card.hiddenTag, ELEMENT_HIDDEN, MATCHED, CLICKED, NO_INTERACTION);

        const createImagesContainer = document.createElement('div');
        classUtils.addClass(createImagesContainer, CARDS_CONTAINER);

        SELECTORS.BOARD.append(createImagesContainer);

        clearGameScore();
        updateTimerDisplay();
        elementUtils.appendElement(createImagesContainer, card.hiddenTag);
      });
    }, 700); // Затримка перед очищенням і перетасуванням карт

    UIButtonClick(200, button);
  });
}

