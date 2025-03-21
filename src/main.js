import { loadingScreen } from './js/preload/loadingScreen.js';
import { preloadImages } from './js/preload/preloadImages.js';
import { backgroundStart } from './js/ui/background.js';
import { compareCards } from './js/compareCards.js';
import { restartLevelButton } from './js/buttons/restartLevelButton.js';
import { handleLevelClick } from './js/buttons/handleLevelClick.js';
import { checkAllCardsMatched } from './js/matchChecker.js';
import { GAME_CONFIG, SELECTORS } from './js/gameState.js';
import { UI_LEVEL_BUTTONS } from './js/ui/uiActions.js';

window.addEventListener( 'load', async () => {
  try {
    await preloadImages();
  } catch ( error ) {
    console.error(
      `Виникла помилка при завантаженні контенту. 
      Помилка -> ${ error.message }` );
  }
  loadingScreen();
  backgroundStart();
  // Різна затримка для змоги клікнути на кнопку рівня, для мобільних або компа
  UI_LEVEL_BUTTONS.levelButtonsRemoveNoClick( GAME_CONFIG.MOBILE_SIZE_SCREEN ? 1000 : 1700 );
  compareCards();
  handleLevelClick( SELECTORS.ANOTHER_LEVEL_BUTTON );
  handleLevelClick( SELECTORS.SCOREBOARD_BUTTON_NEW_GAME );
  restartLevelButton( SELECTORS.RESTART_LEVEL_BUTTON );
  checkAllCardsMatched();
} );


















