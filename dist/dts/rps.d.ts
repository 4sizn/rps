export * from "./types";
import { GAME_RESULT, Player, HAND, RPS_RESULT } from "./types";
export declare function game(players: Player[]): GAME_RESULT;
export declare function makePlayer(hand: HAND): Player;
export declare function rpsResult(myHand: HAND, otherHand: HAND): RPS_RESULT;
