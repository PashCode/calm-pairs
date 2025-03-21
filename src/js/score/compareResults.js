import { gameStorage } from '../gameStorage.js';
import { timeFormatter } from '../utils/timeFormatter.js';
import { scoreboardElements } from '../ui/scoreboardElements.js';
import { GAME_CONFIG, GAME_STATE, SELECTORS } from '../gameState.js';

export function compareResults() {
  const getLocalStorage = gameStorage(GAME_STATE.chooseLevel);
  const levelData = getLocalStorage[GAME_STATE.chooseLevel];
  const firstGame = levelData.newPlayer;

  const current = {
    time: GAME_STATE.TIMER.final_time,
    mistakes: GAME_STATE.mismatch_cards,
  };

  const previous = {
    time: levelData.resultTime,
    mistakes: levelData.resultMistakes,
  };

  const timeDiff = current.time - previous.time;
  const mistakeDiff = current.mistakes - previous.mistakes;
  const absTimeDiff = Math.abs(timeDiff);
  const absMistakeDiff = Math.abs(mistakeDiff);

  const statusMessages = {
    newPlayer: 'this is your first time on this level',
    betterBoth: 'better time and fewer mistakes',
    betterTime: 'new record: better time',
    fewerMistakes: 'new record: fewer mistakes',
    noRecord: 'no new records this time',
  };

  function updateScoreboard(status, timeText = '', mistakesText = '') {
    SELECTORS.SCOREBOARD_STATUS.innerHTML = status;
    SELECTORS.SCOREBOARD_CURRENT_TIMER.innerHTML = timeFormatter(current.time);
    SELECTORS.SCOREBOARD_CURRENT_MISTAKES.innerHTML = current.mistakes;
    SELECTORS.SCOREBOARD_OLD_TIMER_COUNTER.innerHTML = timeFormatter(previous.time);
    SELECTORS.SCOREBOARD_OLD_MISTAKES_COUNTER.innerHTML = previous.mistakes;
    SELECTORS.SCOREBOARD_COMPARE_TIME.innerHTML = timeText;
    SELECTORS.SCOREBOARD_COMPARE_MISTAKES.innerHTML = mistakesText;
  }

  function breakLine( ) {
    return GAME_CONFIG.MOBILE_SIZE_SCREEN ? '<br>' : ''
  }

  // Новий гравець
  if (firstGame) {
    updateScoreboard(statusMessages.newPlayer);
    scoreboardElements('addClass');
    return;
  }

  // Показуємо блок порівняння для нових та не нових гравців
  scoreboardElements('removeClass');

  // 1. Час кращий і помилок менше
  if (timeDiff < 0 && mistakeDiff < 0) {
    updateScoreboard(
      statusMessages.betterBoth,
      `time improved${breakLine()} by: ${timeFormatter(absTimeDiff)}`,
      `mistakes reduced${breakLine()} by: ${absMistakeDiff}`
    );
  }
  // 2. Час кращий, але помилок більше
  else if (timeDiff < 0 && mistakeDiff > 0) {
    updateScoreboard(
      statusMessages.betterTime,
      `time improved${breakLine()} by: ${timeFormatter(absTimeDiff)}`,
      `mistakes increased${breakLine()} by: ${absMistakeDiff}`
    );
  }
  // 3. Час гірший, але помилок менше
  else if (timeDiff > 0 && mistakeDiff < 0) {
    updateScoreboard(
      statusMessages.fewerMistakes,
      `time worse${breakLine()} by: ${timeFormatter(absTimeDiff)}`,
      `mistakes reduced${breakLine()} by: ${absMistakeDiff}`
    );
  }
  // 4. Час гірший і помилок більше
  else if (timeDiff > 0 && mistakeDiff > 0) {
    updateScoreboard(
      statusMessages.noRecord,
      `time worse${breakLine()} by: ${timeFormatter(absTimeDiff)}`,
      `mistakes increased${breakLine()} by: ${absMistakeDiff}`
    );
  }
  // 5. Час такий самий, але помилок менше
  else if (timeDiff === 0 && mistakeDiff < 0) {
    updateScoreboard(
      statusMessages.fewerMistakes,
      `time is${breakLine()} unchanged`,
      `mistakes reduced${breakLine()} by: ${absMistakeDiff}`
    );
  }
  // 6. Час такий самий, але помилок більше
  else if (timeDiff === 0 && mistakeDiff > 0) {
    updateScoreboard(
      statusMessages.noRecord,
      `time is${breakLine()} unchanged`,
      `mistakes increased${breakLine()} by: ${absMistakeDiff}`
    );
  }
  // 7. Помилок стільки ж, але час гірший
  else if (mistakeDiff === 0 && timeDiff > 0) {
    updateScoreboard(
      statusMessages.noRecord,
      `time worse${breakLine()} by: ${timeFormatter(absTimeDiff)}`,
      `mistakes are${breakLine()} unchanged`
    );
  }
  // 8. Помилок стільки ж, але час кращий
  else if (mistakeDiff === 0 && timeDiff < 0) {
    updateScoreboard(
      statusMessages.betterTime,
      `time improved${breakLine()} by: ${timeFormatter(absTimeDiff)}`,
      `mistakes are${breakLine()} unchanged`
    );
  }
  // 9. Час і помилки такі самі, як і були
  else if (timeDiff === 0 && mistakeDiff === 0) {
    updateScoreboard(
      statusMessages.noRecord,
      `time is${breakLine()} unchanged`,
      `mistakes are${breakLine()} unchanged`
    );
  }
}

