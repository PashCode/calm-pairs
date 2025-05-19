import { nanoid } from 'nanoid';
import { GAME_STATE } from '../gameState';
import { TImageName, IGameElements } from '../types/gameStateTypes';

export function initCardData( cardsNames: TImageName[] ): void {
  GAME_STATE.gameElements = cardsNames.flatMap( ( name: TImageName ): IGameElements[] => {
    const id: string = nanoid( 5 );
    const path = `img/${ name }-card.png`;
    const visibleTag: HTMLImageElement = document.createElement( 'img' );
    const hiddenTag: HTMLImageElement = document.createElement( 'img' );

    return [
      { id, path, visibleTag, hiddenTag },
      { id, path, visibleTag, hiddenTag },
    ];
  } );
}
