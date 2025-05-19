import { GAME_CONFIG } from '../gameState';

export async function preloadImages(): Promise<HTMLImageElement[]> {
  // Масив шляхів до всіх зображень, які потрібно завантажити
  const preloadImagePaths: string[] = [
    'img/hidden-card.jpg',
    // Генеруємо шляхи до всіх карт з останнього рівня гри (найбільша кількість)
    ...Object.values( GAME_CONFIG.QUANTITY_CARDS ).at( -1 )
      .map( ( name: string ): string => `img/${ name }-card.png` ),
  ];

  // Функція для завантаження окремого зображення
  const loadImage: ( path: string ) => Promise<HTMLImageElement> = async ( path: string ): Promise<HTMLImageElement> => {
    return new Promise<HTMLImageElement>( ( resolve, reject,
    ): void => {
      const img: HTMLImageElement = new Image();
      img.src = path; // Встановлюємо шлях, що автоматично починає завантаження
      img.onload = (): void => resolve( img ); // Успішне завантаження
      img.onerror = (): void => reject( new Error( `Помилка при завантажені зображення: ${ path }` ) ); // Помилка
    } );
  };

  return Promise.all( preloadImagePaths.map( loadImage ) );
}
