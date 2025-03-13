import { CLASSES, SELECTORS } from '../gameState.js';
import { classUtils } from '../utils/domUtils.js';

export function scoreboardElements( method ) {
  [ SELECTORS.SCOREBOARD_TIME_COMPARE_LINE,
    SELECTORS.SCOREBOARD_MISTAKES_COMPARE_LINE,
    SELECTORS.SCOREBOARD_TIME_COMPARE_WRAPPER,
    SELECTORS.SCOREBOARD_MISTAKES_COMPARE_WRAPPER,
    SELECTORS.SCOREBOARD_OLD_TIMER,
    SELECTORS.SCOREBOARD_OLD_MISTAKES,
  ].forEach( ( el ) => classUtils[method]( el, CLASSES.ELEMENT_HIDDEN ) );

  [ SELECTORS.SCOREBOARD_TIME_WRAPPER,
    SELECTORS.SCOREBOARD_MISTAKES_WRAPPER,
  ].forEach( ( el ) => classUtils[method]( el, CLASSES.MARGIN_BOTTOM_RESET ) );

  [ SELECTORS.SCOREBOARD_TIME,
    SELECTORS.SCOREBOARD_MISTAKES,
  ].forEach( ( el ) => classUtils[method]( el, CLASSES.FIRST_GAME_PADDING ) );
}
