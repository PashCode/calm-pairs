import { gameStorage } from '../gameStorage.js';
import { GAME_STATE, SELECTORS } from '../gameState.js';
import { elementUtils } from '../../utils/domUtils.js';

export function compareResults() {
  const getLocalStorage = gameStorage( GAME_STATE.chooseLevel );
  let firstGame = getLocalStorage[ GAME_STATE.chooseLevel ].newPlayer;
  const current = {
    time: GAME_STATE.TIMER.final_time,
    mistakes: GAME_STATE.mismatch_cards,
  };
  const previous = {
    time: getLocalStorage[ GAME_STATE.chooseLevel ].resultTime,
    mistakes: getLocalStorage[ GAME_STATE.chooseLevel ].resultMistakes,
  };

  const timeRecord = current.time < previous.time;
  const mistakesRecord = current.mistakes < previous.mistakes;
  if ( firstGame ) {
// 1-й результат (без OLD)
    console.log( 'YOU DIDNT PLAY THIS GAME EARLIER' );
    console.log( 'YOUR TIME:', current.time );
    console.log( 'YOUR MISTAKES:', current.mistakes );

    elementUtils.appendElement(SELECTORS.RES_TIMER_TITLE, 'YOU DIDNT PLAY THIS GAME EARLIER')
    elementUtils.appendElement( SELECTORS.SCOREBOARD_NEW_TIMER, current.time );
    elementUtils.appendElement( SELECTORS.SCOREBOARD_NEW_MISTAKES, current.mistakes );

  } else if ( timeRecord && mistakesRecord ) {
    // И время лучше и ошибок меньше
    console.log( 'In this game you have a new record by time and mistakes' );
    console.log( 'YOUR CURRENT TIME:', current.time );
    console.log( 'YOUR PREVIOUS TIME:', previous.time );

    console.log( 'YOUR CURRENT MISTAKES:', current.mistakes );
    console.log( 'YOUR PREVIOUS MISTAKES:', previous.mistakes );

    console.log( 'THE TIME WAS IMPROVED BY :', previous.time - current.time );
    console.log( 'THE MISTAKES LESS BY :', previous.mistakes - current.mistakes );
  } else if ( timeRecord ) {
    // Время лучше
    console.log( 'In this game you have a new time record' );
    console.log( 'YOUR CURRENT TIME:', current.time );
    console.log( 'YOUR PREVIOUS TIME:', previous.time );
    console.log( 'THE TIME WAS IMPROVED BY :', previous.time - current.time );
  } else if ( mistakesRecord ) {
    // Ошибок меньше
    console.log( 'In this game, you make fewer mistakes.' );
    console.log( 'YOUR CURRENT MISTAKES:', current.mistakes );
    console.log( 'YOUR PREVIOUS MISTAKES:', previous.mistakes );
    console.log( 'THE MISTAKES LESS BY :', previous.mistakes - current.mistakes );
  } else {
    // Время хуже и ошибок больше
    console.log( 'In this game you dont have a new record by time or mistakes' );
    console.log( 'YOUR CURRENT TIME:', current.time );
    console.log( 'YOUR PREVIOUS TIME:', previous.time );

    console.log( 'YOUR CURRENT MISTAKES:', current.mistakes );
    console.log( 'YOUR PREVIOUS MISTAKES:', previous.mistakes );

    console.log( 'THE TIME WAS WORSE BY :', current.time - previous.time );
    console.log( 'THE MISTAKES MORE BY :', current.mistakes - previous.mistakes );
  }
}
