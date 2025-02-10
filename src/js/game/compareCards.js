import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils, elementUtils } from '../utils/domUtils.js';
import { choiceLevel } from './choiceLevel.js';

const { CARD_HIDDEN, ELEMENT_HIDDEN, CLICKED, MATCHED, NO_INTERACTION } = CLASSES;

choiceLevel();

export function compareCards() {

  SELECTORS.CARDS_BOARD_CONTAINER.addEventListener( 'click', ( event ) => {
    const clickedContainer = event.target.closest( '.cards-container' );
    if ( !event.target.classList.contains( CARD_HIDDEN ) ) return;

    firstClickOnCard( event.target, clickedContainer );
    secondClickOnCard();
  } );


  function firstClickOnCard( targetEvent, clickedContainer ) {
    GAME_STATE.gameElements.forEach( ( card ) => {
      if ( targetEvent === card.hiddenTag ) {
        GAME_STATE.activeChoice.push( card.id );
        classUtils.addClass( targetEvent, CLICKED, ELEMENT_HIDDEN );
        classUtils.addClass( card.visibleTag, NO_INTERACTION );
        elementUtils.appendElement( clickedContainer, card.visibleTag );
      }
    } );
  }

  // ---------------------------------

  function secondClickOnCard() {
    if ( GAME_STATE.activeChoice.length !== 2 ) return;
    const [ firstId, secondId ] = GAME_STATE.activeChoice;
    const isMatched = firstId === secondId;

    GAME_STATE.gameElements.forEach( ( card ) => {
      classUtils.addClass( card.hiddenTag, NO_INTERACTION );

      if ( isMatched ) {
        classUtils.replaceClass( card.hiddenTag, CLICKED, MATCHED );
        classUtils.removeClass( card.hiddenTag, NO_INTERACTION );
      } else if ( !card.hiddenTag.classList.contains( MATCHED ) ) {
        setTimeout( () => {
          classUtils.removeClass( card.hiddenTag, ELEMENT_HIDDEN, CLICKED, NO_INTERACTION );
          elementUtils.removeElement( card.visibleTag );
        }, GAME_CONFIG.FLIP_DELAY );
      }
    } );
    elementUtils.clearActiveChoice();
  }
}



