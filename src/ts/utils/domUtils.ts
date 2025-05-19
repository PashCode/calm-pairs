import { GAME_STATE } from '../gameState';

export const classUtils = {
  // Додає класи до елемента
  addClass: ( element: HTMLElement, ...className: string[] ): void => {
    element.classList.add( ...className );
  },

  // Видаляє класи з елемента
  removeClass: ( element: HTMLElement, ...className: string[] ): void => {
    element.classList.remove( ...className );
  },

  // Заміняє старий клас на новий
  replaceClass: ( element: HTMLElement, oldClass: string, newClass: string ): boolean => {
    return element.classList.replace( oldClass, newClass );
  },
};

export const elementUtils = {
  // Додає елемент до батьківського елемента
  appendElement: ( parentElement: HTMLElement, element: HTMLElement ): void => {
    parentElement.append( element );
  },

  // Видаляє елемент
  removeElement: ( element: HTMLElement ): void => {
    element.remove();
  },

  // Очищає контейнер карт
  clearCardsContainer: ( cardsContainer: HTMLCollectionOf<Element> ): void => {
    while ( cardsContainer.length > 0 ) cardsContainer[ 0 ].remove();
  },

  // Очищає елементи гри
  clearGameElements: (): void => {
    GAME_STATE.gameElements = [];
  },

  // Очищає активний вибір карт
  clearActiveChoice: (): void => {
    GAME_STATE.selectedCards = [];
  },
};
