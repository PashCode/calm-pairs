import { choiceLevel } from './js/game/choiceLevel.js';
import { preloadImages } from './js/game/preloadElements/preloadImages.js';

document.addEventListener( 'DOMContentLoaded', () => {
    preloadImages();
    choiceLevel();
} );


