import { Howl } from 'howler';

export const GAME_STATE = {
  gameElements: [],
  selectedCards: [],
  chooseLevel: null,
  mismatch_cards: 0,
  TIMER: {
    TIMER_TICK_INTERVAL: 1000,
    timedId: 0,
    minutes: 0,
    seconds: 0,
    finalTime: 0,
  },
};

export const GAME_CONFIG = {
  QUANTITY_CARDS: {
    ALL_CARDS: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
    EASY: [ '1', '2', '3', '4', '5', '6' ],
    BASIC: [ '1', '2', '3', '4', '5', '6', '7', '8' ],
    MEDIUM: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
    HARD: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
  },
  UNMATCHED_DELAY: 600,
  LOADING_DURATION: 1500,
  STORAGE_KEY: 'playerScoreboard',
  MOBILE_SIZE_SCREEN: window.innerWidth <= 1024,
  SOUND_CHOICE_LEVEL_CLICK: new Howl( { src: [ '/sounds/choice-level.aac' ] } ),
  SOUND_CLICK_ON_CARD: new Howl( { src: [ '/sounds/click-card.aac' ] } ),
  SOUND_MATCHED_CARDS: new Howl( { src: [ '/sounds/matched-cards.aac' ] } ),
};

export const SELECTORS = {
  BACKGROUND: document.querySelector( '.background' ),
  LOAD_SCREEN: document.querySelector( '.loading-screen' ),
  CHOICE_LEVEL_CONTAINER: document.querySelector( '.choice-level' ),
  BOARD: document.querySelector( '.board' ),
  EXPAND_BOARD_LAYOUT: document.getElementsByClassName( 'expand-board-layout' ),
  CARDS_CONTAINER: document.getElementsByClassName( 'cards-container' ),
  GAME_TIMER: document.querySelector( '.time-counter' ),
  GAME_MISTAKES: document.querySelector( '.mistakes-counter' ),
  RESTART_LEVEL_BUTTON: document.querySelector( '.restart-level' ),
  ANOTHER_LEVEL_BUTTON: document.querySelector( '.another-level' ),
  SCOREBOARD_SCREEN: document.querySelector( '.results' ),
  SCOREBOARD_TIME: document.querySelector( '.results-time' ),
  SCOREBOARD_MISTAKES: document.querySelector( '.results-mistakes' ),
  SCOREBOARD_CURRENT_TIMER: document.querySelector( '.time-current-counter' ),
  SCOREBOARD_CURRENT_MISTAKES: document.querySelector( '.mistakes-current-counter' ),
  SCOREBOARD_OLD_TIMER: document.querySelector( '.time-previous' ),
  SCOREBOARD_OLD_TIMER_COUNTER: document.querySelector( '.time-previous-counter' ),
  SCOREBOARD_OLD_MISTAKES: document.querySelector( '.mistakes-previous' ),
  SCOREBOARD_OLD_MISTAKES_COUNTER: document.querySelector( '.mistakes-previous-counter' ),
  SCOREBOARD_TIME_WRAPPER: document.querySelector( '.time-wrapper' ),
  SCOREBOARD_MISTAKES_WRAPPER: document.querySelector( '.mistakes-wrapper' ),
  SCOREBOARD_COMPARE_TIME: document.querySelector( '.time-compare-count' ),
  SCOREBOARD_COMPARE_MISTAKES: document.querySelector( '.mistakes-compare-count' ),
  SCOREBOARD_STATUS: document.querySelector( '.results__status-message' ),
  SCOREBOARD_BUTTON_NEW_GAME: document.querySelector( '.buttons__new-game' ),
  SCOREBOARD_TIME_COMPARE_WRAPPER: document.querySelector( '.time-compare-wrapper' ),
  SCOREBOARD_MISTAKES_COMPARE_WRAPPER: document.querySelector( '.mistakes-compare-wrapper' ),
  SCOREBOARD_TIME_COMPARE_LINE: document.querySelector( '.results-counters-board__time-compare-line' ),
  SCOREBOARD_MISTAKES_COMPARE_LINE: document.querySelector( '.results-counters-board__mistakes-compare-line' ),
  ACTIVE_GAME: document.querySelector( '.active-game' ),
  ACTIVE_GAME_COUNTERS: document.querySelector( '.active-game__counters' ),
};


export const CLASSES = {
  CARD: 'card',
  CARD_VISIBLE: 'card-visible',
  CARD_HIDDEN: 'card-hidden',
  CARDS_CONTAINER: 'cards-container',
  CLICKED: 'clicked',
  BUTTON_CLICK: 'button-clicked',
  MATCHED: 'matched',
  ELEMENT_HIDDEN: 'element-hidden',
  NO_INTERACTION: 'no-interaction',
  NO_VISIBLE: 'no-visible',
  EXPAND_BOARD_LAYOUT: 'expand-board-layout',
  EASY_ADAPTIVE: 'active-game-easy',
  BASIC_ADAPTIVE: 'active-game-basic',
  MEDIUM_ADAPTIVE: 'active-game-medium',
  HARD_ADAPTIVE: 'active-game-hard',
  EASY_EXPAND: 'expand-easy',
  BASIC_EXPAND: 'expand-basic',
  MEDIUM_EXPAND: 'expand-medium',
  HARD_EXPAND: 'expand-hard',
  BLUR_BACKGROUND: 'blur-background',
  MARGIN_BOTTOM_RESET: 'margin-bottom-reset',
  FIRST_GAME_PADDING: 'first-game-padding',
};




