import { GAME_CONFIG, GAME_STATE } from './gameState';
import { TDifficultyLevel } from './types/gameStateTypes';
import { ILocalStorage } from './types/localStorageTypes';

export function ensureStorage( level: TDifficultyLevel ): ILocalStorage {
  let existingStorage: ILocalStorage;

  // Отримання існуючих даних з localStorage або створення порожнього об'єкта, якщо даних немає
  try {
    const storageData: string | null = localStorage.getItem( GAME_CONFIG.STORAGE_KEY );
    existingStorage = storageData ? JSON.parse( storageData ) : {};
  } catch ( error ) {
    if ( error instanceof Error ) { // Перевірка, чи помилка є об'єктом Error
      console.error( 'Parsing error:', error.message );
    }
    existingStorage = {};
  }

  // Якщо рівень ще не збережений, ініціалізуємо його зі значеннями за замовчуванням
  if ( level && !existingStorage[ level ] ) {
    existingStorage[ level ] = {
      newPlayer: true,
      resultTime: GAME_STATE.TIMER.finalTime,
      resultMistakes: GAME_STATE.mismatchCards,
    };
  }

  // Повернення оновлених даних
  return existingStorage;
}
