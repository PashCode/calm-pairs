import { incrementMismatchCounter } from './score/mismatchCounter';
import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState';
import { classUtils, elementUtils } from './utils/domUtils';
import { IGameElements } from './types/gameStateTypes';

const { CARD_HIDDEN, ELEMENT_HIDDEN, CLICKED, MATCHED, NO_INTERACTION } = CLASSES;

export function compareCards(): void {
  if ( SELECTORS.BOARD instanceof HTMLDivElement ) {
    SELECTORS.BOARD.addEventListener( 'click', ( event: MouseEvent ): void => {
      if ( event.target instanceof HTMLImageElement ) { // Перевірка, чи клікнули на видиму картку
        const clickedCard: HTMLImageElement = event.target;
        const selectedCardsContainer: HTMLDivElement | null = clickedCard.closest( '.cards-container' );

        if ( !clickedCard.classList.contains( CARD_HIDDEN ) ) return; // Якщо картка вже відкрита, виходимо
        if ( !selectedCardsContainer ) return; // Якщо контейнер карток не знайдено, виходимо

        firstClickOnCard( clickedCard, selectedCardsContainer );
        secondClickOnCard();
      }
    } );
  }

  function firstClickOnCard( hiddenCard: HTMLImageElement, selectedCardsContainer: HTMLDivElement ): void {
    GAME_STATE.gameElements.forEach( ( cardsContainer: IGameElements ): void => {
      if ( hiddenCard === cardsContainer.hiddenTag ) { // Перевірка чи збігається клікнута картка з тегом в стані гри
        GAME_CONFIG.SOUND_CLICK_ON_CARD.play();
        GAME_STATE.selectedCards.push( cardsContainer.id );
        classUtils.addClass( hiddenCard, CLICKED, NO_INTERACTION );
        classUtils.addClass( cardsContainer.visibleTag, NO_INTERACTION );
        elementUtils.appendElement( selectedCardsContainer, cardsContainer.visibleTag );
      }
    } );
  }

  function secondClickOnCard(): void {
    if ( GAME_STATE.selectedCards.length !== 2 ) return; // Якщо картки не співпали, виходимо

    const [ firstId, secondId ] = GAME_STATE.selectedCards;
    const isMatched: boolean = firstId === secondId;

    if ( isMatched ) {
      GAME_CONFIG.SOUND_CLICK_ON_CARD.pause();
      GAME_CONFIG.SOUND_MATCHED_CARDS.play();
    }
    if ( !isMatched ) {
      incrementMismatchCounter(); // Збільшуємо лічильник помилок, якщо не співпали
    }

    GAME_STATE.gameElements.forEach( ( cardsContainer: IGameElements ): void => {
      classUtils.addClass( cardsContainer.visibleTag, NO_INTERACTION );
      classUtils.addClass( cardsContainer.hiddenTag, NO_INTERACTION );

      if ( isMatched ) {
        classUtils.replaceClass( cardsContainer.hiddenTag, CLICKED, MATCHED );
        classUtils.removeClass( cardsContainer.hiddenTag, NO_INTERACTION );
      } else if ( !cardsContainer.hiddenTag.classList.contains( MATCHED ) ) {
        setTimeout( (): void => {
          classUtils.removeClass(
            cardsContainer.hiddenTag,
            ELEMENT_HIDDEN,
            CLICKED,
            NO_INTERACTION,
          );
          elementUtils.removeElement( cardsContainer.visibleTag );
        }, GAME_CONFIG.UNMATCHED_DELAY );
      }
    } );

    elementUtils.clearActiveChoice(); // Очищення масиву карток, які були клікнуті
  }
}
