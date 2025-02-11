export const GAME_STATE = {
  gameElements: [],
  STORAGE_KEY: 'playerScoreboard',
  activeChoice: [],
};

export const GAME_CONFIG = {
  QUANTITY_CARDS: {
    EASY: [ '1', '2', '3', '4', '5', '6' ],
    BASIC: [ '1', '2', '3', '4', '5', '6', '7', '8' ],
    MEDIUM: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
    HARD: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
  },
  FLIP_DELAY: 400,
  LOADING_DURATION: 1100,
  TIMER: {
    TIMER_ID: 0,
    minutes: 0,
    seconds: 0,
    final_time: 0,
  },
  MISTAKES: 0
};

export const SELECTORS = {
  LOAD_SCREEN: document.querySelector( '.game-screen__loading' ),
  CHOICE_LEVEL_CONTAINER: document.querySelector( '.game-screen__choice-level' ),
  CARDS_BOARD_CONTAINER: document.querySelector( '.game-screen__game-board .cards-board' ),
  GAME_TIMER: document.querySelector( '.game-screen__game-board .result_timer' ),
  RESTART_LEVEL_BUTTON: document.querySelector( '.buttons_restart-level' ),
  ANOTHER_LEVEL_BUTTON: document.querySelector( '.buttons_another-level' ),
};


export const CLASSES = {
  CARD: 'card',
  CARD_VISIBLE: 'card-visible',
  CARD_HIDDEN: 'card-hidden',
  ELEMENT_VISIBLE: 'element-visible',
  ELEMENT_HIDDEN: 'element-hidden',
  NO_INTERACTION: 'no-interaction',
  CARDS_CONTAINER: 'cards-container',
  CLICKED: 'clicked',
  MATCHED: 'matched',
};
