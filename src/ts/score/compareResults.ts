import { ensureStorage } from '../ensureStorage';
import { timeFormatter } from '../utils/timeFormatter';
import { scoreboardStyle } from '../ui/scoreboardStyle';
import { GAME_CONFIG, GAME_STATE, SELECTORS } from '../gameState';
import { ILocalStorage, IStorageLevel } from '../types/localStorageTypes';
import { IScoreboardUpdate } from '../types/commonTypes';
import { TDifficultyLevel } from '../types/gameStateTypes';

// Порівнює поточні результати гри зі збереженими та оновлює екран результатів
export function compareResults(): void {
  // Перевіряємо, чи обрано рівень гри
  if ( GAME_STATE.selectedLevel ) {
    // Отримуємо дані зі сховища обраного рівня
    const currentLevel: TDifficultyLevel = GAME_STATE.selectedLevel;
    const currentStorageData: ILocalStorage = ensureStorage( currentLevel );
    const levelResults: IStorageLevel | undefined = currentStorageData[ currentLevel ];

    // Якщо дані для поточного рівня існують у сховищі
    if ( levelResults ) {
      const firstGame: boolean = levelResults.newPlayer;

      // Поточні результати для цього рівня
      const current = {
        time: GAME_STATE.TIMER.finalTime,
        mistakes: GAME_STATE.mismatchCards,
      };

      // Попередні результати для цього рівня зі сховища
      const previous = {
        time: levelResults.resultTime,
        mistakes: levelResults.resultMistakes,
      };

      // Розрахунок різниці між поточними та попередніми результатами
      const timeDiff: number = current.time - previous.time;
      const mistakeDiff: number = current.mistakes - previous.mistakes;
      const absTimeDiff: number = Math.abs( timeDiff );
      const absMistakeDiff: number = Math.abs( mistakeDiff );

      // Текстові повідомлення для різних сценаріїв результатів
      const statusMessages = {
        newPlayer: 'this is your first time on this level',
        betterBoth: 'better time and fewer mistakes',
        betterTime: 'new record: better time',
        fewerMistakes: 'new record: fewer mistakes',
        noRecord: 'no new records this time',
      };

      // Оновлює відображення результатів на екрані
      function updateScoreboard( status: string, timeText = '', mistakesText = '' ): void {
        const updates: IScoreboardUpdate[] = [
          { element: SELECTORS.SCOREBOARD_STATUS as HTMLHeadingElement, value: status },
          { element: SELECTORS.SCOREBOARD_CURRENT_TIMER as HTMLSpanElement, value: timeFormatter( current.time ) },
          { element: SELECTORS.SCOREBOARD_CURRENT_MISTAKES as HTMLSpanElement, value: String( current.mistakes ) },
          { element: SELECTORS.SCOREBOARD_OLD_TIMER_COUNTER as HTMLSpanElement, value: timeFormatter( previous.time ) },
          { element: SELECTORS.SCOREBOARD_OLD_MISTAKES_COUNTER as HTMLSpanElement, value: String( previous.mistakes ) },
          { element: SELECTORS.SCOREBOARD_COMPARE_TIME as HTMLSpanElement, value: timeText },
          { element: SELECTORS.SCOREBOARD_COMPARE_MISTAKES as HTMLSpanElement, value: mistakesText },
        ];

        updates.forEach( ( { element, value }: IScoreboardUpdate ): void => {
          element.innerHTML = value;
        } );
      }

      function breakLine(): string {
        return GAME_CONFIG.MOBILE_SIZE_SCREEN ? '<br>' : '';
      }

      // Новий гравець
      if ( firstGame ) {
        updateScoreboard( statusMessages.newPlayer );
        scoreboardStyle( 'addClass' );
        return;
      }

      // Показуємо блок порівняння для нових та не нових гравців
      scoreboardStyle( 'removeClass' );

      // 1. Час кращий і помилок менше
      if ( timeDiff < 0 && mistakeDiff < 0 ) {
        updateScoreboard(
          statusMessages.betterBoth,
          `time improved${ breakLine() } by: ${ timeFormatter( absTimeDiff ) }`,
          `mistakes reduced${ breakLine() } by: ${ absMistakeDiff }`,
        );
      }
      // 2. Час кращий, але помилок більше
      else if ( timeDiff < 0 && mistakeDiff > 0 ) {
        updateScoreboard(
          statusMessages.betterTime,
          `time improved${ breakLine() } by: ${ timeFormatter( absTimeDiff ) }`,
          `mistakes increased${ breakLine() } by: ${ absMistakeDiff }`,
        );
      }
      // 3. Час гірший, але помилок менше
      else if ( timeDiff > 0 && mistakeDiff < 0 ) {
        updateScoreboard(
          statusMessages.fewerMistakes,
          `time worse${ breakLine() } by: ${ timeFormatter( absTimeDiff ) }`,
          `mistakes reduced${ breakLine() } by: ${ absMistakeDiff }`,
        );
      }
      // 4. Час гірший і помилок більше
      else if ( timeDiff > 0 && mistakeDiff > 0 ) {
        updateScoreboard(
          statusMessages.noRecord,
          `time worse${ breakLine() } by: ${ timeFormatter( absTimeDiff ) }`,
          `mistakes increased${ breakLine() } by: ${ absMistakeDiff }`,
        );
      }
      // 5. Час такий самий, але помилок менше
      else if ( timeDiff === 0 && mistakeDiff < 0 ) {
        updateScoreboard(
          statusMessages.fewerMistakes,
          `time is${ breakLine() } unchanged`,
          `mistakes reduced${ breakLine() } by: ${ absMistakeDiff }`,
        );
      }
      // 6. Час такий самий, але помилок більше
      else if ( timeDiff === 0 && mistakeDiff > 0 ) {
        updateScoreboard(
          statusMessages.noRecord,
          `time is${ breakLine() } unchanged`,
          `mistakes increased${ breakLine() } by: ${ absMistakeDiff }`,
        );
      }
      // 7. Помилок стільки ж, але час гірший
      else if ( mistakeDiff === 0 && timeDiff > 0 ) {
        updateScoreboard(
          statusMessages.noRecord,
          `time worse${ breakLine() } by: ${ timeFormatter( absTimeDiff ) }`,
          `mistakes are${ breakLine() } unchanged`,
        );
      }
      // 8. Помилок стільки ж, але час кращий
      else if ( mistakeDiff === 0 && timeDiff < 0 ) {
        updateScoreboard(
          statusMessages.betterTime,
          `time improved${ breakLine() } by: ${ timeFormatter( absTimeDiff ) }`,
          `mistakes are${ breakLine() } unchanged`,
        );
      }
      // 9. Час і помилки такі самі, як і були
      else if ( timeDiff === 0 && mistakeDiff === 0 ) {
        updateScoreboard(
          statusMessages.noRecord,
          `time is${ breakLine() } unchanged`,
          `mistakes are${ breakLine() } unchanged`,
        );
      }
    }
  }
}
