import { UI_ALL_BUTTONS } from './uiActions.js';

export function UIButtonClick( delay, button ) {
  UI_ALL_BUTTONS.buttonDown( button );
  UI_ALL_BUTTONS.buttonUp( delay, button );
}
