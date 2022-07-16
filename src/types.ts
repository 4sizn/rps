export enum HAND {
  ROCK,
  PAPER,
  SCISSORS,
}

export enum RPS_RESULT {
  WIN,
  LOSE,
  DRAW,
}

export interface Player {
  id: string;
  hand: HAND;
}

export interface GAME_RESULT {
  draw?: boolean;
  winners?: Player[];
}
