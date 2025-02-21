import { GAME_CONFIG, GAME_STATE } from './gameState.js';
import { gameStorage } from './gameStorage.js';

export function resultHandler() {
  let getLocalStorage = gameStorage( GAME_STATE.chooseLevel );
  getLocalStorage[ GAME_STATE.chooseLevel ].newPlayer &&= false;

  function checkResult( chooseLevel, storageValue, newValue ) {
    if ( getLocalStorage[ chooseLevel ][ storageValue ] > newValue ) {
      getLocalStorage[ chooseLevel ][ storageValue ] = newValue;
    }
  }

  checkResult( GAME_STATE.chooseLevel, 'resultTime', GAME_STATE.TIMER.final_time );
  checkResult( GAME_STATE.chooseLevel, 'resultMistakes', GAME_STATE.mismatch_cards );

  localStorage.setItem( GAME_CONFIG.STORAGE_KEY, JSON.stringify( getLocalStorage ) );
}

