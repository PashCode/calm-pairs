import { GAME_CONFIG } from '../gameState.js';

export function preloadImages() {
    const allImagePaths = [
        'img/hidden-card.jpg',
        ...Object.values( GAME_CONFIG.QUANTITY_CARDS ).at( -1 )
            .map( ( name ) => `img/${ name }-card.jpg` ),
    ];

    allImagePaths.forEach( ( path ) => {
        const img = new Image();
        img.src = path;
    } );
}