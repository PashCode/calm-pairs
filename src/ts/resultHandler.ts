import { ensureStorage } from './ensureStorage';
import { GAME_CONFIG, GAME_STATE } from './gameState';
import { ILocalStorage, IStorageLevel, ResultStorageValueKeys } from './types/localStorageTypes';
import { TDifficultyLevel } from './types/gameStateTypes';

export function resultHandler(): void {
  // Ініціалізація порожнім об’єктом на випадок, якщо рівень не обраний
  let currentStorageData: ILocalStorage = {};

  if ( GAME_STATE.selectedLevel ) {
    // Отримання даних з localStorage для вибраного рівня
    currentStorageData = ensureStorage( GAME_STATE.selectedLevel );

    // Встановлення, що новий гравець більше не є новим
    const currentLevelData: IStorageLevel | undefined = currentStorageData[ GAME_STATE.selectedLevel ];
    if ( currentLevelData ) {
      currentLevelData.newPlayer &&= false;
    }

    // Функція для перевірки та оновлення результатів, якщо нове значення краще
    function checkResult(
      selectedLevelKey: TDifficultyLevel,
      storageValueKey: ResultStorageValueKeys,
      newValue: number,
    ): void {
      if ( currentStorageData[ selectedLevelKey ] ) {
        const levelData: IStorageLevel = currentStorageData[ selectedLevelKey ];
        if ( levelData[ storageValueKey ] > newValue ) {
          levelData[ storageValueKey ] = newValue;
        }
      }
    }

    // Перевірка та оновлення часу та кількості помилок для вибраного рівня
    checkResult( GAME_STATE.selectedLevel, 'resultTime', GAME_STATE.TIMER.finalTime );
    checkResult( GAME_STATE.selectedLevel, 'resultMistakes', GAME_STATE.mismatchCards );

    // Оновлення даних в localStorage лише для обраного рівня
    localStorage.setItem( GAME_CONFIG.STORAGE_KEY, JSON.stringify( currentStorageData ) );
  }
}
