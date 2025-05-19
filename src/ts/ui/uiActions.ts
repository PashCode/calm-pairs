import { delayUiAction } from '../utils/delayUiAction';
import { classUtils } from '../utils/domUtils';
import { CLASSES, GAME_STATE } from '../gameState';
import { SELECTORS as GAME_SELECTORS } from '../gameState';
import { ISelectorsTypes, TDifficultyLevel } from '../types/gameStateTypes';

// Створюємо тип RequiredSelectors, де всі селектори гарантовано існують (не null).
// Зроблено, щоб не писати перевірки на null.
type RequiredSelectors = {
  [K in keyof ISelectorsTypes]-?: NonNullable<ISelectorsTypes[K]>;
};
const SELECTORS = GAME_SELECTORS as RequiredSelectors;


export const UI_LEVEL_BUTTONS = {
  levelButtonsRemoveNoClick: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_INTERACTION ),
    );
  },

  levelButtonsAddNoClickAndOpacity: (): void => {
    classUtils.addClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION );
  },

  levelButtonsAddHidden: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.addClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN ),
    );
  },

  activeGameAddNoClick: (): void => {
    classUtils.addClass( SELECTORS.GAME_TOOLBAR, CLASSES.NO_INTERACTION );
  },

  activeGameRemoveNoClick: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.GAME_TOOLBAR, CLASSES.NO_INTERACTION ),
    );
  },

  activeGameRemoveHidden: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.GAME_TOOLBAR, CLASSES.ELEMENT_HIDDEN ),
    );
  },

  activeGameRemoveOpacity: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.GAME_TOOLBAR, CLASSES.NO_VISIBLE ),
    );
  },

  expandBoardLayout: (): void => {
    classUtils.addClass( SELECTORS.BOARD, CLASSES.EXPAND_BOARD_LAYOUT );
  },

  expandBoardAndAdaptUI: ( delay: number ): void => {
    const level: TDifficultyLevel = GAME_STATE.selectedLevel ?? 'EASY';
    delayUiAction(
      delay,
      (): void => classUtils.addClass( SELECTORS.GAME_TOOLBAR, CLASSES[ `${ level }_ADAPTIVE`] ),
      (): void => classUtils.addClass( SELECTORS.BOARD, CLASSES[ `${ level }_EXPAND` ] ),
    );
  },
};
// ------------------------------------------------------------
export const UI_RESTART_BUTTON = {
  activeGameAddNoClick: UI_LEVEL_BUTTONS.activeGameAddNoClick,
  activeGameRemoveNoClick: UI_LEVEL_BUTTONS.activeGameRemoveNoClick,
};
// ------------------------------------------------------------
export const UI_ANOTHER_LEVEL_BUTTON = {
  backgroundBlurRemove: (): void => {
    classUtils.removeClass( SELECTORS.BACKGROUND, CLASSES.BLUR_BACKGROUND );
  },

  activeGameAddNoClick: UI_LEVEL_BUTTONS.activeGameAddNoClick,
  activeGameRemoveNoClick: UI_LEVEL_BUTTONS.activeGameRemoveNoClick,

  resetBoardPosition: ( delay: number ): void => {
    const expandedBoard = SELECTORS.EXPANDED_BOARD_LAYOUT[ 0 ] as HTMLDivElement;
    delayUiAction(
      delay,
      (): string => expandedBoard.style.transform = '',
    );
  },

  levelButtonsRemoveHidden: (): void => {
    classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN );
  },

  levelButtonsRemoveNoClickAndOpacity: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION ),
    );
  },

  activeGameAdaptUI: (): void => {
    const level: TDifficultyLevel = GAME_STATE.selectedLevel ?? 'EASY';
    classUtils.addClass( SELECTORS.GAME_TOOLBAR, CLASSES[ `${ level }_ADAPTIVE` ] );
  },

  activeGameAddOpacity: (): void => {
    classUtils.addClass( SELECTORS.GAME_TOOLBAR, CLASSES.NO_VISIBLE );
  },

  activeGameAddHidden: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.addClass( SELECTORS.GAME_TOOLBAR, CLASSES.ELEMENT_HIDDEN ),
    );
  },

  expandBoardReset: ( delay: number ): void => {
    const level: TDifficultyLevel = GAME_STATE.selectedLevel ?? 'EASY';
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.BOARD, CLASSES.EXPAND_BOARD_LAYOUT, CLASSES[ `${ level }_EXPAND` ] ),
    );
  },
};
// ------------------------------------------------------------
export const UI_NEW_GAME_BUTTON = {
  scoreboardAddOpacity: (): void => {
    classUtils.addClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.NO_VISIBLE );
  },
  scoreboardAddHidden: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.addClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.ELEMENT_HIDDEN ),
    );
  },
};
// ------------------------------------------------------------
export const UI_ALL_BUTTONS = {
  buttonDown: ( button: HTMLButtonElement ): void => {
    classUtils.addClass( button, CLASSES.BUTTON_CLICK );
  },

  buttonUp: ( delay: number, button: HTMLButtonElement ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( button, CLASSES.BUTTON_CLICK ),
    );
  },
};
// ------------------------------------------------------------
export const UI_CARDS_CONTAINER = {
  cardsContainerAddOpacity: (): void => {
    Array.from( SELECTORS.CARDS_CONTAINER ).forEach( ( el: Element ): void => {
      const card = el as HTMLDivElement;
      classUtils.addClass( card, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION );
    } );
  },

  cardsContainerRemoveOpacity: ( delay: number ): void => {
    Array.from( SELECTORS.CARDS_CONTAINER ).forEach( ( el: Element ): void => {
      const card = el as HTMLDivElement;
      delayUiAction(
        delay,
        (): void => classUtils.removeClass( card, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION ),
      );
    } );
  },
};
// ------------------------------------------------------------
export const UI_MATCHED_CARDS = {
  resetBoardPosition: UI_ANOTHER_LEVEL_BUTTON.resetBoardPosition,

  scoreboardRemoveHidden: (): void => {
    classUtils.removeClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.ELEMENT_HIDDEN );
  },

  scoreboardRemoveOpacity: ( delay: number ): void => {
    delayUiAction(
      delay,
      (): void => classUtils.removeClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.NO_VISIBLE ),
    );
  },

  activeGameAddOpacity: UI_ANOTHER_LEVEL_BUTTON.activeGameAddOpacity,
  activeGameAddHidden: UI_ANOTHER_LEVEL_BUTTON.activeGameAddHidden,

  backgroundBlurAdd: (): void => {
    classUtils.addClass( SELECTORS.BACKGROUND, CLASSES.BLUR_BACKGROUND );
  },
};
