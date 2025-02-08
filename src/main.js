import { preloadImages } from './js/game/preloadElements/preloadImages.js';
import { compareCards } from './js/game/compareCards.js';

document.addEventListener( 'DOMContentLoaded', () => {
  preloadImages();
} );

compareCards();

