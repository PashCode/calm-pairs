import { GAME_STATE } from '../game/gameState.js';

export function clearActiveChoice() {
  GAME_STATE.activeChoice = [];
}