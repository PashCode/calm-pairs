export const GAME_STATE = {
  gameElements: [],
  selectedCards: [],
  chooseLevel: null,
  mismatch_cards: 0,
  TIMER: {
    TIMER_ID: 0, TIMER_TICK_INTERVAL: 1000,
    minutes: 0, seconds: 0, final_time: 0,
  },
};

export const GAME_CONFIG = {
  QUANTITY_CARDS: {
    EASY: [ '1', '2', '3', '4', '5', '6' ],
    BASIC: [ '1', '2', '3', '4', '5', '6', '7', '8' ],
    MEDIUM: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
    HARD: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
  },
  FLIP_DELAY: 400,
  LOADING_DURATION: 1500,
  STORAGE_KEY: 'playerScoreboard',
};

export const SELECTORS = {
  LOAD_SCREEN: document.querySelector( '.loading-screen' ),
  CHOICE_LEVEL_CONTAINER: document.querySelector( '.choice-level' ),
  GAME_BOARD_CONTAINER: document.querySelector( '.game-screen__game-board' ),
  CARDS_BOARD_CONTAINER: document.querySelector( '.cards-board' ),
  GAME_TIMER: document.querySelector( '.result_timer .counter' ),
  GAME_MISTAKES: document.querySelector( '.result__mistakes .counter' ),
  RESTART_LEVEL_BUTTON: document.querySelector( '.buttons_restart-level' ),
  ANOTHER_LEVEL_BUTTON: document.querySelector( '.buttons_another-level' ),

  SCOREBOARD_SCREEN: document.querySelector( '.game-screen__scoreboard' ),
  SCOREBOARD_OLD_TIMER: document.querySelector( '.final-results__time_old-counter' ),
  SCOREBOARD_NEW_TIMER: document.querySelector( '.final-results__time_new-counter' ),
  SCOREBOARD_OLD_MISTAKES: document.querySelector( '.final-results__mistakes_old-counter' ),
  SCOREBOARD_NEW_MISTAKES: document.querySelector( '.final-results__mistakes_new-counter' ),

  CALCULATE_RES_TIMER: document.querySelector('.calculate-result__timer'),
  RES_TIMER_TITLE: document.querySelector('.calculate-result__timer_title'),
  RES_TIMER_COUNT: document.querySelector('.calculate-result__timer_count'),

  CALCULATE_RES_MISTAKES: document.querySelector('.calculate-result__mistakes'),
  RES_MISTAKES_TITLE: document.querySelector('.calculate-result__mistakes_title'),
  RES_MISTAKES_COUNT: document.querySelector('.calculate-result__mistakes_count'),

};


export const CLASSES = {
  CARD: 'card',
  CARD_VISIBLE: 'card-visible',
  CARD_HIDDEN: 'card-hidden',
  CARDS_CONTAINER: 'cards-container',
  CLICKED: 'clicked',
  MATCHED: 'matched',
  ELEMENT_VISIBLE: 'element-visible',
  ELEMENT_HIDDEN: 'element-hidden',
  NO_INTERACTION: 'no-interaction',
};
