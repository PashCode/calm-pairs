import { GAME_CONFIG, SELECTORS } from './js/gameState.js';
import { UI_LEVEL_BUTTONS } from './js/ui/uiActions.js';
import { loadingScreen } from './js/preload/loadingScreen.js';
import { preloadImages } from './js/preload/preloadImages.js';
import { backgroundStart } from './js/ui/background.js';
import { compareCards } from './js/compareCards.js';
import { restartLevelButton } from './js/buttons/restartLevelButton.js';
import { anotherLevelButton } from './js/buttons/anotherLevelButton.js';
import { checkAllCardsMatched } from './js/matchChecker.js';

window.addEventListener( 'load', async () => {
  try {
    await preloadImages();
  } catch ( error ) {
  }
  loadingScreen();
  backgroundStart();
  UI_LEVEL_BUTTONS.levelButtonsRemoveNoClick( GAME_CONFIG.MOBILE_SIZE_SCREEN ? 1000 : 1700 );
  compareCards();
  anotherLevelButton( SELECTORS.ANOTHER_LEVEL_BUTTON );
  anotherLevelButton( SELECTORS.SCOREBOARD_BUTTON_NEW_GAME );
  restartLevelButton( SELECTORS.RESTART_LEVEL_BUTTON );
  checkAllCardsMatched();
} );


















