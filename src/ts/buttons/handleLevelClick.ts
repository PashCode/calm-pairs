import { clearGameScore } from '../score/clearGameScore';
import { clickHandleLevelButtonUI } from '../ui/anotherLevel';
import { UIButtonClick } from '../ui/buttonClick';
import { elementUtils } from '../utils/domUtils';

export function handleLevelClick( button: HTMLButtonElement ): void {
  button.addEventListener( 'click', (): void => {
    clickHandleLevelButtonUI();

    elementUtils.clearGameElements();
    elementUtils.clearActiveChoice();

    UIButtonClick( 200, button );

    clearGameScore();
  } );
}
