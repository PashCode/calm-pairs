import { SELECTORS } from '../gameState';

export function boardTransform(): void {
  // Оновлення висоти SELECTORS.ACTIVE_GAME
  function updateGameHeight( boardRect: DOMRectReadOnly ): void {
    if ( SELECTORS.GAME_TOOLBAR ) {
      // 12 - це підібране вручну pixelPerfect значення для висоти SELECTORS.ACTIVE_GAME
      const activeGameHeight: number = window.innerHeight - boardRect.height - 12;
      SELECTORS.GAME_TOOLBAR.style.height = `${ activeGameHeight }px`;
    }
  }

  // Оновлення вертикальної позиції дошки
  function updateBoardPosition( boardRect: DOMRectReadOnly ): void {
    const expandedBoard = SELECTORS.EXPANDED_BOARD_LAYOUT[ 0 ] as HTMLDivElement;
    const innerWidth: number = window.innerWidth;

    if ( innerWidth <= 1024 && expandedBoard instanceof HTMLDivElement ) {
      // 25 - це підібране вручну pixelPerfect значення для відступу знизу екрана
      const verticalOffset: number = ( window.innerHeight - boardRect.height - 25 ) / 2;
      expandedBoard.style.transform = `translateY(${ verticalOffset }px)`;
    }
  }

  // Обробка зміни розміру дошки
  function handleBoardResize( boardRect: DOMRectReadOnly ): void {
    // Оновлення activeGameHeight
    updateGameHeight( boardRect );
    // Оновлення позиції дошки (спускається вниз)
    updateBoardPosition( boardRect );
  }

  // Створення спостерігача за змінами розміру
  const boardResizeObserver = new ResizeObserver( ( entries: ResizeObserverEntry[] ): void => {
    if ( entries.length > 0 ) {
      requestAnimationFrame( (): void => {
        const boardRect: DOMRectReadOnly = entries[ 0 ].contentRect;
        handleBoardResize( boardRect );
      } );
    }
  } );

  // Початок спостереження за змінами розміру дошки
  if ( SELECTORS.BOARD ) {
    boardResizeObserver.observe( SELECTORS.BOARD );
  }
}
