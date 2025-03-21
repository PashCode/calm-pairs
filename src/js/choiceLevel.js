import { addCardIdAndPath } from './preload/cardIdAndPath.js';
import { shuffleCards } from './utils/shuffleCards.js';
import { renderCards } from './renderCards.js';
import { clickLevelButtonUI } from './ui/levelButtons.js';
import { randomizedCard } from './randomizedCard.js';
import { updateTimerDisplay } from './score/updateTimerDisplay.js';
import { boardTransform } from './ui/boardTransform.js';
import { GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { UI_LEVEL_BUTTONS } from './ui/uiActions.js';


export function choiceLevel() {
  SELECTORS.CHOICE_LEVEL_CONTAINER.childNodes.forEach( ( levelButton ) => {
    levelButton.addEventListener( 'click', ( event ) => {
      GAME_CONFIG.SOUND_CHOICE_LEVEL_CLICK.play();

      GAME_STATE.chooseLevel = event.target.dataset.level.toUpperCase(); // Зберігаємо вибраний рівень
      const quantityCards = GAME_CONFIG.QUANTITY_CARDS[ GAME_STATE.chooseLevel ].length; // Отримуємо кількість карт для вибраного рівня

      // Затримка перед трансформацією дошки
      setTimeout( () => boardTransform(), 2000 );

      // UI після кліку кнопки рівня
      clickLevelButtonUI( levelButton );

      // Додавання ID карток і їх шляхів
      addCardIdAndPath( randomizedCard( quantityCards ) );

      // Перемішування карток
      shuffleCards( GAME_STATE.gameElements );

      // Затримка перед рендерингом карток і оновленням таймера
      setTimeout( () => {
        renderCards();
        updateTimerDisplay();
      }, GAME_CONFIG.MOBILE_SIZE_SCREEN ? 3850 : 2400 );

      UI_LEVEL_BUTTONS.expandBoardLayout();
    } );
  } );
}

