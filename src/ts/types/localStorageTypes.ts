// LOCAL STORAGE
export interface IStorageLevel {
  newPlayer: boolean;
  resultMistakes: number;
  resultTime: number;
}

export interface ILocalStorage {
  EASY?: IStorageLevel;
  BASIC?: IStorageLevel;
  MEDIUM?: IStorageLevel;
  HARD?: IStorageLevel;
}

export type ResultStorageValueKeys = 'resultMistakes' | 'resultTime';
