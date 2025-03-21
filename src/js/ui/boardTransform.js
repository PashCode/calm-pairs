import { SELECTORS } from '../gameState.js';

export function boardTransform() {
  let resizeTimeout;

  // Оновлення висоти гри
  function updateGameHeight(entry) {
    const freeSpace = window.innerHeight - entry.contentRect.height - 12;
    SELECTORS.ACTIVE_GAME.style.height = `${freeSpace}px`;
  }

  // Оновлення позиції дошки
  function updateBoardPosition(entry) {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 1024 && SELECTORS.EXPAND_BOARD_LAYOUT[0]) {
      const verticalOffset = (window.innerHeight - entry.contentRect.height - 25) / 2;
      SELECTORS.EXPAND_BOARD_LAYOUT[0].style.transform = `translateY(${verticalOffset}px)`;
    }
  }

  // Обробка зміни розміру
  function handleResize(entry) {
    clearTimeout(resizeTimeout);

    updateBoardPosition(entry); // Оновлення позиції дошки без затримки

    // Затримка для оновлення висоти гри
    resizeTimeout = setTimeout(() => {
      updateGameHeight(entry); // Оновлення висоти гри після затримки
    }, 500);
  }

  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0];
    handleResize(entry); // Обробка зміни розміру
  });

  // Спостереження за змінами розміру елемента
  resizeObserver.observe(SELECTORS.BOARD);
}
