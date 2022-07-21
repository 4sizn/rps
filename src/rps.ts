import { GAME_RESULT, Player, HAND, RPS_RESULT } from "./types";

export function game(players: Player[]): GAME_RESULT {
  const pHands = [...new Set(players.map((p) => p.hand))];
  if (pHands.length !== 2) return { draw: true };

  const winned =
    rpsResult(pHands[0], pHands[1]) === RPS_RESULT.WIN ? pHands[0] : pHands[1];

  return { winners: players.filter((p) => p.hand === winned) };
}

export function makePlayer(hand: HAND): Player {
  assert(hand >= 0 && hand < 3, "player hands problem...");
  return {
    id: randomUUID(),
    hand: hand,
  };
}

export function makeComputer(): Player {
  const randomHand = Math.floor(Math.random() * 3);
  return makePlayer(randomHand);
}

export function rpsResult(myHand: HAND, otherHand: HAND): RPS_RESULT {
  return [RPS_RESULT.WIN, RPS_RESULT.LOSE, RPS_RESULT.DRAW][
    (myHand - otherHand + 2) % 3
  ];
}

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

// UUID v4 generator in JavaScript (RFC4122 compliant)
function randomUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 3) | 8;
    return v.toString(16);
  });
}
