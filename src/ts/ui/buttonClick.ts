import { UI_ALL_BUTTONS } from './uiActions';

export function UIButtonClick( delay: number, button: HTMLButtonElement ): void {
  UI_ALL_BUTTONS.buttonDown( button );
  UI_ALL_BUTTONS.buttonUp( delay, button );
}
