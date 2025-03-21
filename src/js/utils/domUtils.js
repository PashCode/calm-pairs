import { GAME_STATE, SELECTORS } from '../gameState.js';

export const classUtils = {
  // Додає класи до елемента
  addClass: (element, ...className) => element.classList.add(...className),

  // Видаляє класи з елемента
  removeClass: (element, ...className) => element.classList.remove(...className),

  // Заміняє старий клас на новий
  replaceClass: (element, oldClass, newClass) => element.classList.replace(oldClass, newClass),
};

export const elementUtils = {
  // Додає елемент до батьківського елемента
  appendElement: (parentElement, element) => parentElement.append(element),

  // Видаляє елемент
  removeElement: (element) => element.remove(),

  // Очищає контейнер карт
  clearCardsContainer: (element) => {
    while (element.length > 0) SELECTORS.CARDS_CONTAINER[0].remove();
  },

  // Очищає елементи гри
  clearGameElements: () => GAME_STATE.gameElements = [],

  // Очищає активний вибір карт
  clearActiveChoice: () => GAME_STATE.selectedCards = [],
}
