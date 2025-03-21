import { choiceLevel } from './choiceLevel.js';
import { incrementMismatchCounter } from './score/mismatchCounter.js';
import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils, elementUtils } from './utils/domUtils.js';

const { CARD_HIDDEN, ELEMENT_HIDDEN, CLICKED, MATCHED, NO_INTERACTION } = CLASSES;
choiceLevel();

export function compareCards() {
  SELECTORS.BOARD.addEventListener( 'click', ( event ) => {
    const clickedContainer = event.target.closest( '.cards-container' );

    // Перевірка, чи картка вже відкрита
    if ( !event.target.classList.contains( CARD_HIDDEN ) ) return;

    firstClickOnCard( event.target, clickedContainer ); // Обробка першого кліку
    secondClickOnCard(); // Обробка другого кліку
  } );

  function firstClickOnCard( targetEvent, clickedContainer ) {
    GAME_STATE.gameElements.forEach( ( card ) => {
      if ( targetEvent === card.hiddenTag ) {
        GAME_CONFIG.SOUND_CLICK_ON_CARD.play();

        GAME_STATE.selectedCards.push( card.id );
        classUtils.addClass( targetEvent, CLICKED, NO_INTERACTION );
        classUtils.addClass( card.visibleTag, NO_INTERACTION );
        elementUtils.appendElement( clickedContainer, card.visibleTag );
      }
    } );
  }

  // ---------------------------------

  function secondClickOnCard() {
    if ( GAME_STATE.selectedCards.length !== 2 ) return; // Перевірка, чи вибрано дві картки
    const [ firstId, secondId ] = GAME_STATE.selectedCards;
    const isMatched = firstId === secondId; // Перевірка на збіг карток

    if ( isMatched ) {
      GAME_CONFIG.SOUND_CLICK_ON_CARD.pause(); // Зупинка звука першого кліку
      GAME_CONFIG.SOUND_MATCHED_CARDS.play(); // Відтворення звук збігу карток
    }
    if ( !isMatched ) {
      incrementMismatchCounter(); // Якщо картки не співпали, збільшення лічильник помилок
    }

    GAME_STATE.gameElements.forEach( ( card ) => {
      classUtils.addClass( card.visibleTag, NO_INTERACTION );
      classUtils.addClass( card.hiddenTag, NO_INTERACTION );

      if ( isMatched ) {
        classUtils.replaceClass( card.hiddenTag, CLICKED, MATCHED );
        classUtils.removeClass( card.hiddenTag, NO_INTERACTION );
      } else if ( !card.hiddenTag.classList.contains( MATCHED ) ) {
        setTimeout( () => {
          classUtils.removeClass( card.hiddenTag, ELEMENT_HIDDEN, CLICKED, NO_INTERACTION );
          elementUtils.removeElement( card.visibleTag );
        }, GAME_CONFIG.UNMATCHED_DELAY );
      }
    } );
    elementUtils.clearActiveChoice();
  }
}



