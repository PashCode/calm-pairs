export const GAME_STATE = {
    gameElements: [],
    STORAGE_KEY: 'playerScoreboard',
    activeChoice: [],
};

export const GAME_CONFIG = {
    QUANTITY_CARDS: {
        easy: [ '1', '2', '3', '4', '5', '6' ],
        basic: [ '1', '2', '3', '4', '5', '6', '7', '8' ],
        medium: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
        hard: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
    },
};

export const SELECTORS = {
    ALL_BUTTONS_CONTAINER: document.querySelector( '.game-screen__choice-level' ),
    CARDS_BOARD_CONTAINER: document.querySelector( '.game-screen__game-board' ),
    test: document.querySelector( '.game-screen__game-board .result' ),
};

export const CLASSES = {
    CARD_VISIBLE: 'card-visible',
    CARD_HIDDEN: 'card-hidden',
    ELEMENT_VISIBLE: 'element-visible',
    ELEMENT_HIDDEN: 'element-hidden',
    NO_INTERACTION: 'no-interaction',
};