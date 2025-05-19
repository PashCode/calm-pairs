import { Howl } from 'howler';

export type TImageName = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15';
export type TDifficultyLevel = 'EASY' | 'BASIC' | 'MEDIUM' | 'HARD';

// GAME_STATE
interface ITimer {
  readonly TIMER_TICK_INTERVAL: number;
  timerId: number;
  minutes: number;
  seconds: number;
  finalTime: number;
}
export interface IGameElements {
  hiddenTag: HTMLImageElement;
  id: string;
  path: string;
  visibleTag: HTMLImageElement;
}
export interface IGameState {
  gameElements: IGameElements[],
  selectedCards: string[],
  selectedLevel: TDifficultyLevel | null,
  mismatchCards: number,
  TIMER: ITimer
}

// GAME_CONFIG
interface IQuantityCards {
  readonly ALL_CARDS: TImageName[];
  readonly EASY: TImageName[];
  readonly BASIC: TImageName[];
  readonly MEDIUM: TImageName[];
  readonly HARD: TImageName[];
}
export interface IGameConfig {
  QUANTITY_CARDS: IQuantityCards;
  UNMATCHED_DELAY: number;
  LOADING_DURATION: number;
  ALL_CARDS_MATCHED_DELAY: number;
  RESTART_BUTTON_UI_DELAY: number;
  BOARD_TRANSFORM_DELAY: number;
  RENDER_DELAY_MOBILE: number;
  RENDER_DELAY_DESKTOP: number;
  readonly STORAGE_KEY: 'playerScoreboard';
  MOBILE_SIZE_SCREEN: boolean;
  SOUND_CHOICE_LEVEL_CLICK: Howl;
  SOUND_CLICK_ON_CARD: Howl;
  SOUND_MATCHED_CARDS: Howl;
}

// SELECTORS
export interface ISelectorsTypes {
  BACKGROUND: HTMLDivElement | null;
  LOAD_SCREEN: HTMLDivElement | null;
  CHOICE_LEVEL_CONTAINER: HTMLDivElement | null;
  BOARD: HTMLDivElement | null;
  EXPANDED_BOARD_LAYOUT: HTMLCollectionOf<Element>;
  CARDS_CONTAINER: HTMLCollectionOf<Element>;
  GAME_TIMER: HTMLSpanElement | null;
  GAME_MISTAKES: HTMLSpanElement | null;
  RESTART_LEVEL_BUTTON: HTMLButtonElement | null;
  ANOTHER_LEVEL_BUTTON: HTMLButtonElement | null;
  SCOREBOARD_SCREEN: HTMLDivElement | null;
  SCOREBOARD_TIME: HTMLDivElement | null;
  SCOREBOARD_MISTAKES: HTMLDivElement | null;
  SCOREBOARD_CURRENT_TIMER: HTMLSpanElement | null;
  SCOREBOARD_CURRENT_MISTAKES: HTMLSpanElement | null;
  SCOREBOARD_OLD_TIMER: HTMLParagraphElement | null;
  SCOREBOARD_OLD_TIMER_COUNTER: HTMLSpanElement | null;
  SCOREBOARD_OLD_MISTAKES: HTMLParagraphElement | null;
  SCOREBOARD_OLD_MISTAKES_COUNTER: HTMLSpanElement | null;
  SCOREBOARD_TIME_WRAPPER: HTMLDivElement | null;
  SCOREBOARD_MISTAKES_WRAPPER: HTMLDivElement | null;
  SCOREBOARD_COMPARE_TIME: HTMLSpanElement | null;
  SCOREBOARD_COMPARE_MISTAKES: HTMLSpanElement | null;
  SCOREBOARD_STATUS: HTMLHeadingElement | null;
  SCOREBOARD_BUTTON_NEW_GAME: HTMLButtonElement | null;
  SCOREBOARD_TIME_COMPARE_WRAPPER: HTMLDivElement | null;
  SCOREBOARD_MISTAKES_COMPARE_WRAPPER: HTMLDivElement | null;
  SCOREBOARD_TIME_COMPARE_LINE: HTMLHRElement | null;
  SCOREBOARD_MISTAKES_COMPARE_LINE: HTMLHRElement | null;
  GAME_TOOLBAR: HTMLDivElement | null;
  GAME_TOOLBAR_COUNTERS: HTMLDivElement | null;
}



