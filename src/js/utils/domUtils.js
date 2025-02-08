import { GAME_STATE } from '../game/gameState.js';

export const classUtils = {
  addClass: ( element, ...className ) => element.classList.add( ...className ),
  removeClass: ( element, ...className ) => element.classList.remove( ...className ),
  replaceClass: ( element, oldClass, newClass ) => element.classList.replace( oldClass, newClass ),
};

export const elementUtils = {
  addElement: ( parentElement, element ) => parentElement.append( element ),
  removeElement: ( element ) => element.remove(),
  clearActiveChoice: () => GAME_STATE.activeChoice = [],
};
