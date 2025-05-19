import { initCardData } from './preload/initCardData';
import { shuffleCards } from './utils/shuffleCards';
import { renderCards } from './renderCards';
import { clickLevelButtonUI } from './ui/levelButtons';
import { finalCardsCount } from './finalCardsCount';
import { updateTimerDisplay } from './score/updateTimerDisplay';
import { boardTransform } from './ui/boardTransform';
import { GAME_CONFIG, GAME_STATE, SELECTORS } from './gameState';
import { UI_LEVEL_BUTTONS } from './ui/uiActions';
import { TDifficultyLevel } from './types/gameStateTypes';

export function choiceLevel(): void {
  const choiceLevelContainer = SELECTORS.CHOICE_LEVEL_CONTAINER as HTMLDivElement;

  Array.from( choiceLevelContainer.children ).forEach( ( levelButton: ChildNode ): void => {
    if ( levelButton instanceof HTMLButtonElement ) {
      levelButton.addEventListener( 'click', ( event: MouseEvent ): void => {
        GAME_CONFIG.SOUND_CHOICE_LEVEL_CLICK.play(); // Відтворення звуку кліку

        const selectedButton = event.currentTarget as HTMLButtonElement;
        let selectedLevel: string | undefined = selectedButton.dataset.level;

        if ( !selectedLevel ) {
          selectedLevel = 'EASY';
          console.error( `Error in selecting level. ${ selectedLevel } level is automatically chosen.` );
        } // Якщо помилка при визначенні рівня, обираємо найлегший

        GAME_STATE.selectedLevel = selectedLevel.toUpperCase() as TDifficultyLevel;

        const quantityCards: number = GAME_CONFIG.QUANTITY_CARDS[ GAME_STATE.selectedLevel ].length;

        setTimeout( (): void => boardTransform(), GAME_CONFIG.BOARD_TRANSFORM_DELAY );

        clickLevelButtonUI( levelButton ); // Оновлення UI кнопки рівня

        initCardData( finalCardsCount( quantityCards ) );

        shuffleCards( GAME_STATE.gameElements ); // Перемішуємо картки

        setTimeout( (): void => {
          renderCards();
          updateTimerDisplay();
        }, GAME_CONFIG.MOBILE_SIZE_SCREEN
          ? GAME_CONFIG.RENDER_DELAY_MOBILE
          : GAME_CONFIG.RENDER_DELAY_DESKTOP );

        UI_LEVEL_BUTTONS.expandBoardLayout();
      } );
    }
  } );
}
