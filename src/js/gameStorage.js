import { GAME_CONFIG, GAME_STATE } from './gameState.js';

export function gameStorage( level ) {
  // Отримання існуючих даних з localStorage або створення порожнього об'єкта, якщо даних немає
  const existingStorage =
    JSON.parse( localStorage.getItem( GAME_CONFIG.STORAGE_KEY ) ) || {};

  // Якщо рівень ще не збережений, ініціалізуємо його зі значеннями за замовчуванням
  if ( !existingStorage[ level ] ) {
    existingStorage[ level ] = {
      newPlayer: true,
      resultTime: GAME_STATE.TIMER.final_time,
      resultMistakes: GAME_STATE.mismatch_cards,
    };
  }

  // Повернення оновлених даних
  return existingStorage;
}
