import { GAME_CONFIG, GAME_STATE } from './gameState.js';

export function gameStorage( level ) {
  const existingStorage =
    JSON.parse( localStorage.getItem( GAME_CONFIG.STORAGE_KEY ) ) || {};

  if ( !existingStorage[ level ] ) {
    existingStorage[ level ] = {
      newPlayer: true,
      resultTime: GAME_STATE.TIMER.final_time,
      resultMistakes: GAME_STATE.mismatch_cards,
    };
  }

  return existingStorage;
}
