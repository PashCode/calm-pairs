import { loadingScreen } from './ts/preload/loadingScreen';
import { preloadImages } from './ts/preload/preloadImages';
import { backgroundStart } from './ts/ui/background';
import { choiceLevel } from './ts/choiceLevel';
import { compareCards } from './ts/compareCards';
import { restartLevelButton } from './ts/buttons/restartLevelButton';
import { handleLevelClick } from './ts/buttons/handleLevelClick';
import { checkAllCardsMatched } from './ts/matchChecker';
import { GAME_CONFIG, SELECTORS } from './ts/gameState';
import { UI_LEVEL_BUTTONS } from './ts/ui/uiActions';

const anotherLevelButton = SELECTORS.ANOTHER_LEVEL_BUTTON as HTMLButtonElement;
const scoreboardNewGameButton = SELECTORS.SCOREBOARD_BUTTON_NEW_GAME as HTMLButtonElement;
const restartButton = SELECTORS.RESTART_LEVEL_BUTTON as HTMLButtonElement;

window.addEventListener( 'load', async (): Promise<void> => {
  try {
    await preloadImages();
  } catch ( error ) {
    if ( error instanceof Error ) {
      console.error(
        `An error occurred while loading content. 
        Error -> ${ error.message }` );
    }
  }
  loadingScreen();
  backgroundStart();
  // Різна затримка для змоги клікнути на кнопку рівня, для мобільних або компа
  UI_LEVEL_BUTTONS.levelButtonsRemoveNoClick( GAME_CONFIG.MOBILE_SIZE_SCREEN ? 1000 : 1700 );
  choiceLevel();
  compareCards();
  handleLevelClick( anotherLevelButton );
  handleLevelClick( scoreboardNewGameButton );
  restartLevelButton( restartButton );
  checkAllCardsMatched();
} );


















