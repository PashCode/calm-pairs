import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { classUtils, elementUtils } from '../utils/domUtils.js';
import { choiceLevel } from './choiceLevel.js';

choiceLevel();

export function compareCards() {
  SELECTORS.CARDS_BOARD_CONTAINER.addEventListener( 'click', ( event ) => {
    const clickedContainer = event.target.closest( '.cards-container' );
    if ( !event.target.classList.contains( CLASSES.CARD_HIDDEN ) ) return;

    firstClickOnCard( event.target, clickedContainer );
    secondClickOnCard();
  } );


  function firstClickOnCard( targetEvent, clickedContainer ) {
    GAME_STATE.gameElements.forEach( ( card ) => {
      if ( targetEvent === card.hiddenTag ) {
        GAME_STATE.activeChoice.push( card.id );
        classUtils.addClass( targetEvent, CLASSES.CLICKED, CLASSES.ELEMENT_HIDDEN );
        classUtils.addClass( card.visibleTag, CLASSES.NO_INTERACTION );
        elementUtils.addElement( clickedContainer, card.visibleTag );
      }
    } );
  }

  // ---------------------------------

  function secondClickOnCard() {
    if ( GAME_STATE.activeChoice.length !== 2 ) return;
    const [ firstId, secondId ] = GAME_STATE.activeChoice;
    const isMatched = firstId === secondId;

    GAME_STATE.gameElements.forEach( ( card ) => {
      classUtils.addClass( card.hiddenTag, CLASSES.NO_INTERACTION );

      if ( isMatched ) {
        classUtils.replaceClass( card.hiddenTag, CLASSES.CLICKED, CLASSES.MATCHED );
        classUtils.removeClass( card.hiddenTag, CLASSES.NO_INTERACTION );
      } else if ( !card.hiddenTag.classList.contains( CLASSES.MATCHED ) ) {
        setTimeout( () => {
          classUtils.removeClass( card.hiddenTag, CLASSES.ELEMENT_HIDDEN, CLASSES.CLICKED, CLASSES.NO_INTERACTION );
          elementUtils.removeElement( card.visibleTag );
        }, GAME_CONFIG.FLIP_DELAY );
      }
    } );
    elementUtils.clearActiveChoice();
  }
}



