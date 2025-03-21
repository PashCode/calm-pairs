import { GAME_CONFIG } from '../gameState.js';


export function preloadImages() {
  const preloadImagePaths = [
    'img/hidden-card.jpg',
    ...Object.values(GAME_CONFIG.QUANTITY_CARDS).at(-1)
      .map((name) => `img/${name}-card.png`)
  ];

  const resulImagePath = preloadImagePaths.map((path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;

      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${path}`));
    });
  });

  return Promise.all(resulImagePath); // Чекаємо, поки всі зображення завантажаться
}

