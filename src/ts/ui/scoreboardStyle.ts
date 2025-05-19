import { classUtils } from '../utils/domUtils';
import { CLASSES, SELECTORS } from '../gameState';
import { ClassUtilMethod } from '../types/commonTypes';

// Застосовує різні класи залежно від того, чи це перша гра на даному рівні.
export function scoreboardStyle( method: ClassUtilMethod ): void {
 // Допоміжна функція для застосування (додавання або видалення) вказаного CSS-класу
  const applyClassToElements = ( elements: ( HTMLElement | null )[], className: string ): void => {
    elements.forEach( ( element: HTMLElement | null ): void => {
      if ( element !== null ) {
        classUtils[ method ]( element, className );
      }
    } );
  };

  // Застосовуємо потрібні класи до груп елементів
  applyClassToElements( [
    SELECTORS.SCOREBOARD_TIME_COMPARE_LINE,
    SELECTORS.SCOREBOARD_MISTAKES_COMPARE_LINE,
    SELECTORS.SCOREBOARD_TIME_COMPARE_WRAPPER,
    SELECTORS.SCOREBOARD_MISTAKES_COMPARE_WRAPPER,
    SELECTORS.SCOREBOARD_OLD_TIMER,
    SELECTORS.SCOREBOARD_OLD_MISTAKES,
  ], CLASSES.ELEMENT_HIDDEN );

  applyClassToElements( [
    SELECTORS.SCOREBOARD_TIME_WRAPPER,
    SELECTORS.SCOREBOARD_MISTAKES_WRAPPER,
  ], CLASSES.MARGIN_BOTTOM_RESET );

  applyClassToElements( [
    SELECTORS.SCOREBOARD_TIME,
    SELECTORS.SCOREBOARD_MISTAKES,
  ], CLASSES.FIRST_GAME_PADDING );
}
