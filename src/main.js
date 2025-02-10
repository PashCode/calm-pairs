import { preloadImages } from './js/game/preloadElements/preloadImages.js';
import { compareCards } from './js/game/compareCards.js';
import { GAME_CONFIG, SELECTORS } from './js/game/gameState.js';
import { classUtils, elementUtils } from './js/utils/domUtils.js';
import { anotherLevelButton } from './js/game/anotherLevelButton.js';
import { restartLevelButton } from './js/game/restartLevelButton.js';

window.addEventListener( 'load', () => {
  preloadImages().then( () => {
    classUtils.addClass( SELECTORS.LOAD_SCREEN );
    setTimeout( () => elementUtils.removeElement( SELECTORS.LOAD_SCREEN ), GAME_CONFIG.LOADING_DURATION );
  } ).catch( ( error ) => console.error( error ) );
} );

compareCards();
anotherLevelButton()
restartLevelButton()

