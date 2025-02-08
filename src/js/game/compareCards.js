import { CLASSES, GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState.js';
import { choiceLevel } from './choiceLevel.js';
import { addClass } from '../utils/addClass.js';
import { removeClass } from '../utils/removeClass.js';
import { replaceClass } from '../utils/replaceClass.js';
import { clearActiveChoice } from '../utils/clearActiveChoice.js';
import { addElement } from '../utils/addElement.js';
import { removeElement } from '../utils/removeElement.js';

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
        addClass( targetEvent, CLASSES.CLICKED, CLASSES.ELEMENT_HIDDEN );
        addClass( card.visibleTag, CLASSES.NO_INTERACTION );
        addElement( clickedContainer, card.visibleTag );
      }
    } );
  }

  // ---------------------------------

  function secondClickOnCard() {
    if ( GAME_STATE.activeChoice.length !== 2 ) return;
    const [ firstId, secondId ] = GAME_STATE.activeChoice;
    const isMatched = firstId === secondId;

    GAME_STATE.gameElements.forEach( ( card ) => {
      addClass( card.hiddenTag, CLASSES.NO_INTERACTION );

      if ( isMatched ) {
        replaceClass( card.hiddenTag, CLASSES.CLICKED, CLASSES.MATCHED );
        removeClass( card.hiddenTag, CLASSES.NO_INTERACTION );
      } else if ( !card.hiddenTag.classList.contains( CLASSES.MATCHED ) ) {
        setTimeout( () => {
          removeClass( card.hiddenTag, CLASSES.ELEMENT_HIDDEN, CLASSES.CLICKED, CLASSES.NO_INTERACTION );
          removeElement( card.visibleTag );
        }, GAME_CONFIG.FLIP_DELAY );
      }
    } );
    clearActiveChoice();
  }
}



