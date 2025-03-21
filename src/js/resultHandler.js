import { gameStorage } from './gameStorage.js';
import { GAME_CONFIG, GAME_STATE } from './gameState.js';

export function resultHandler() {
  // Отримання даних з localStorage для вибраного рівня
  let getLocalStorage = gameStorage( GAME_STATE.chooseLevel );

  // Встановлення, що новий гравець більше не є новим
  getLocalStorage[ GAME_STATE.chooseLevel ].newPlayer &&= false;

  // Функція для перевірки та оновлення результатів, якщо нове значення краще
  function checkResult( chooseLevel, storageValue, newValue ) {
    if ( getLocalStorage[ chooseLevel ][ storageValue ] > newValue ) {
      getLocalStorage[ chooseLevel ][ storageValue ] = newValue;
    }
  }

  // Перевірка та оновлення часу та кількості помилок для вибраного рівня
  checkResult( GAME_STATE.chooseLevel, 'resultTime', GAME_STATE.TIMER.final_time );
  checkResult( GAME_STATE.chooseLevel, 'resultMistakes', GAME_STATE.mismatch_cards );

  // Оновлення даних в localStorage
  localStorage.setItem( GAME_CONFIG.STORAGE_KEY, JSON.stringify( getLocalStorage ) );
}

