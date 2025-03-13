import { elementUtils } from '../utils/domUtils.js';
import { UI_ALL_BUTTONS } from '../ui/uiActions.js';
import { clearGameScore } from '../score/clearGameScore.js';
import { clickAnotherLevelButtonUI } from '../ui/anotherLevel.js';

export function anotherLevelButton( button ) {
  button.addEventListener( 'click', () => {
    clickAnotherLevelButtonUI();

    elementUtils.clearGameElements();
    elementUtils.clearActiveChoice();

    UI_ALL_BUTTONS.buttonDown( button );
    UI_ALL_BUTTONS.buttonUp( 200, button );
    
    clearGameScore();
  } );
}
