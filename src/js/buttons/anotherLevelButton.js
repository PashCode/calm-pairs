import { clearGameScore } from '../score/clearGameScore.js';
import { clickHandleLevelButtonUI } from '../ui/anotherLevel.js';
import { UIButtonClick } from '../ui/buttonClick.js';
import { elementUtils } from '../utils/domUtils.js';

export function handleLevelClick( button ) {
  button.addEventListener( 'click', () => {
    clickHandleLevelButtonUI();

    elementUtils.clearGameElements();
    elementUtils.clearActiveChoice();

    UIButtonClick( 200, button );

    clearGameScore();
  } );
}
