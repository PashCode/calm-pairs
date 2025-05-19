import { GAME_CONFIG } from '../gameState';

// Кеш попередньо завантажених зображень
export const imageCache: Record<string, HTMLImageElement> = {};

// Шляхи: фонова карточка + усі видимі карточки
export async function preloadImages(): Promise<void> {
  const preloadImagePaths: string[] = [
    'img/hidden-card.jpg',
    ...Object.values( GAME_CONFIG.QUANTITY_CARDS ).at( -1 )
      .map( ( name: string ) => `img/${ name }-card.png` ),
  ];

  // Завантажує одне зображення та зберігає його у кеш
  const loadImage = async ( path: string ): Promise<void> => {
    return new Promise( ( resolve, reject ) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        imageCache[ path ] = img;
        resolve();
      };
      img.onerror = () => reject( new Error( `Failed to load image: ${ path }` ) );
    } );
  };

  // Чекаємо, поки всі зображення будуть завантажені
  await Promise.all( preloadImagePaths.map( loadImage ) );
}

