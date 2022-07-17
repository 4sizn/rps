export declare enum HAND {
    ROCK = 0,
    PAPER = 1,
    SCISSORS = 2
}
export declare enum RPS_RESULT {
    WIN = 0,
    LOSE = 1,
    DRAW = 2
}
export interface Player {
    id: string;
    hand: HAND;
}
export interface GAME_RESULT {
    draw?: boolean;
    winners?: Player[];
}
