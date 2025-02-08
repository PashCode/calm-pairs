import { GAME_CONFIG } from '../gameState.js';

export function preloadImages() {
  const preloadImagePaths = [
    'img/hidden-card.jpg',
    ...Object.values( GAME_CONFIG.QUANTITY_CARDS ).at( -1 )
      .map( ( name ) => `img/${ name }-card.jpg` ) ];

  preloadImagePaths.forEach( ( path ) => {
    const img = new Image();
    img.src = path;
  } );
}