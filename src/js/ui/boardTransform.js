import { SELECTORS } from '../gameState.js';

export function boardTransform() {
  let resizeTimeout;

  function updateGameHeight(entry) {
    const freeSpace = window.innerHeight - entry.contentRect.height - 12;
    SELECTORS.ACTIVE_GAME.style.height = `${freeSpace}px`;
  }

  function updateBoardPosition(entry) {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 1024 && SELECTORS.EXPAND_BOARD_LAYOUT[0]) {
      const verticalOffset = (window.innerHeight - entry.contentRect.height - 25) / 2;
      SELECTORS.EXPAND_BOARD_LAYOUT[0].style.transform = `translateY(${verticalOffset}px)`;
    }
  }

  function handleResize(entry) {
    clearTimeout(resizeTimeout);

    // Сразу выполняем обновление позиции доски (без задержки)
    updateBoardPosition(entry);

    // Применяем задержку для обновления высоты игры
    resizeTimeout = setTimeout(() => {
      updateGameHeight(entry);
    }, 500);
  }

  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0];
    handleResize(entry);
  });

  resizeObserver.observe(SELECTORS.BOARD);
}
