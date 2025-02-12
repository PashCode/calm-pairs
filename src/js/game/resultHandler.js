import { GAME_CONFIG, GAME_STATE } from './gameState.js';

export function resultHandler() {
  let getLocalStorage = JSON.parse( localStorage.getItem( GAME_CONFIG.STORAGE_KEY ) )
    || {
      resultTime: GAME_STATE.TIMER.final_time,
      resultMistakes: GAME_STATE.mismatch_cards,
    };

  function checkResult( storageValue, newValue ) {
    if ( getLocalStorage[ storageValue ] > newValue ) {
      getLocalStorage[ storageValue ] = newValue;
    }
  }

  checkResult( 'resultTime', GAME_STATE.TIMER.final_time );
  checkResult('resultMistakes', GAME_STATE.mismatch_cards)

  localStorage.setItem( GAME_CONFIG.STORAGE_KEY, JSON.stringify( getLocalStorage ) );
}

