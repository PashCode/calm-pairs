import { preloadImages } from './js/game/preloadElements/preloadImages.js';
import { compareCards } from './js/game/compareCards.js';
import { SELECTORS } from './js/game/gameState.js';
import { classUtils, elementUtils } from './js/utils/domUtils.js';

window.addEventListener( 'load', () => {
  preloadImages().then( () => {
    classUtils.addClass( SELECTORS.LOAD_SCREEN );
    setTimeout( () => elementUtils.removeElement( SELECTORS.LOAD_SCREEN ), 1000 );
  } ).catch( ( error ) => console.error( error ) );
} );

compareCards();


