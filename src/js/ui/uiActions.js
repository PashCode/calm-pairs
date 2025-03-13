import { classUtils } from '../utils/domUtils.js';
import { CLASSES, GAME_STATE, SELECTORS } from '../gameState.js';
import { timeout } from '../utils/timeout.js';

export const UI_LEVEL_BUTTONS = {
  levelButtonsRemoveNoClick: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_INTERACTION ),
    );
  },

  levelButtonsAddNoClickAndOpacity: () => {
    classUtils.addClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION );
  },

  levelButtonsAddHidden: ( delay ) => {
    timeout(
      delay,
      () => classUtils.addClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN ),
    );
  },

  activeGameAddNoClick: () => {
    classUtils.addClass( SELECTORS.ACTIVE_GAME, CLASSES.NO_INTERACTION );
  },

  activeGameRemoveNoClick: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.ACTIVE_GAME, CLASSES.NO_INTERACTION ),
    );
  },

  activeGameRemoveHidden: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.ACTIVE_GAME, CLASSES.ELEMENT_HIDDEN ),
    );
  },

  activeGameRemoveOpacity: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.ACTIVE_GAME, CLASSES.NO_VISIBLE ),
    );
  },

  expandBoardLayout: () => {
    classUtils.addClass( SELECTORS.BOARD, CLASSES.EXPAND_BOARD_LAYOUT );
  },

  expandBoardAndAdaptUI: ( delay ) => {
    timeout(
      delay,
      () => classUtils.addClass( SELECTORS.ACTIVE_GAME, CLASSES[ `${ GAME_STATE.chooseLevel }_ADAPTIVE` ] ),
      () => classUtils.addClass( SELECTORS.BOARD, CLASSES[ `${ GAME_STATE.chooseLevel }_EXPAND` ] ),
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
  backgroundBlurRemove: () => {
    classUtils.removeClass( SELECTORS.BACKGROUND, CLASSES.BLUR_BACKGROUND );
  },

  activeGameAddNoClick: UI_LEVEL_BUTTONS.activeGameAddNoClick,
  activeGameRemoveNoClick: UI_LEVEL_BUTTONS.activeGameRemoveNoClick,

  resetBoardPosition: ( delay ) => {
    timeout(
      delay,
      () => SELECTORS.EXPAND_BOARD_LAYOUT[ 0 ].style.transform = '',
    );
  },

  levelButtonsRemoveHidden: () => {
    classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.ELEMENT_HIDDEN );
  },

  levelButtonsRemoveNoClickAndOpacity: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.CHOICE_LEVEL_CONTAINER, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION ),
    );
  },

  activeGameAdaptUI: () => {
    classUtils.addClass( SELECTORS.ACTIVE_GAME, CLASSES[ `${ GAME_STATE.chooseLevel }_ADAPTIVE` ] );
  },

  activeGameAddOpacity: () => {
    classUtils.addClass( SELECTORS.ACTIVE_GAME, CLASSES.NO_VISIBLE );
  },

  activeGameAddHidden: ( delay ) => {
    timeout(
      delay,
      () => classUtils.addClass( SELECTORS.ACTIVE_GAME, CLASSES.ELEMENT_HIDDEN ),
    );
  },

  expandBoardReset: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.BOARD, CLASSES.EXPAND_BOARD_LAYOUT, CLASSES[ `${ GAME_STATE.chooseLevel }_EXPAND` ] ),
    );
  },
};
// ------------------------------------------------------------
export const UI_NEW_GAME_BUTTON = {
  scoreboardAddOpacity: () => {
    classUtils.addClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.NO_VISIBLE );
  },
  scoreboardAddHidden: ( delay ) => {
    timeout(
      delay,
      () => classUtils.addClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.ELEMENT_HIDDEN ),
    );
  },
};
// ------------------------------------------------------------
export const UI_ALL_BUTTONS = {
  buttonDown: ( button ) => {
    classUtils.addClass( button, CLASSES.BUTTON_CLICK );
  },

  buttonUp: ( delay, button ) => {
    timeout(
      delay,
      () => classUtils.removeClass( button, CLASSES.BUTTON_CLICK ),
    );
  },
};
// ------------------------------------------------------------
export const UI_CARDS_CONTAINER = {
  cardsContainerAddOpacity: () => {
    Array.from( SELECTORS.CARDS_CONTAINER ).forEach( ( card ) => {
      classUtils.addClass( card, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION );
    } );
  },

  cardsContainerRemoveOpacity: ( delay ) => {
    Array.from( SELECTORS.CARDS_CONTAINER ).forEach( ( card ) => {
      timeout(
        delay,
        () => classUtils.removeClass( card, CLASSES.NO_VISIBLE, CLASSES.NO_INTERACTION ),
      );
    } );
  },
};
// ------------------------------------------------------------
export const UI_MATCHED_CARDS = {
  resetBoardPosition: UI_ANOTHER_LEVEL_BUTTON.resetBoardPosition,

  scoreboardRemoveHidden: () => {
    classUtils.removeClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.ELEMENT_HIDDEN );
  },

  scoreboardRemoveOpacity: ( delay ) => {
    timeout(
      delay,
      () => classUtils.removeClass( SELECTORS.SCOREBOARD_SCREEN, CLASSES.NO_VISIBLE ),
    );
  },

  activeGameAddOpacity: UI_ANOTHER_LEVEL_BUTTON.activeGameAddOpacity,
  activeGameAddHidden: UI_ANOTHER_LEVEL_BUTTON.activeGameAddHidden,

  backgroundBlurAdd: () => {
    classUtils.addClass( SELECTORS.BACKGROUND, CLASSES.BLUR_BACKGROUND );
  },
};
