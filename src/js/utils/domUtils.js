import { GAME_STATE } from '../game/gameState.js';

export const classUtils = {
  addClass: ( element, ...className ) => element.classList.add( ...className ),
  removeClass: ( element, ...className ) => element.classList.remove( ...className ),
  replaceClass: ( element, oldClass, newClass ) => element.classList.replace( oldClass, newClass ),
};

export const elementUtils = {
  appendElement: ( parentElement, element ) => parentElement.append( element ),
  removeElement: ( element ) => element.remove(),
  clearContainer: (element) => element.innerHTML = '',
  clearGameElements: () => GAME_STATE.gameElements = [],
  clearActiveChoice: () => GAME_STATE.selectedCards = [],
};
