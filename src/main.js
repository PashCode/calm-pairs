import { loadingScreen } from './js/game/preload/loadingScreen.js';
import { preloadImages } from './js/game/preload/preloadImages.js';
import { animate } from './js/utils/background.js';
import { compareCards } from './js/game/compareCards.js';
import { anotherLevelButton } from './js/game/buttons/anotherLevelButton.js';
import { restartLevelButton } from './js/game/buttons/restartLevelButton.js';
import { checkAllCardsMatched } from './js/game/matchChecker.js';


window.addEventListener( 'load', async () => {
  try {
    await preloadImages();
  } catch ( error ) {
    console.error( error );
  }
  loadingScreen();
  animate();
  compareCards();
  anotherLevelButton();
  restartLevelButton();
  checkAllCardsMatched();
} );












