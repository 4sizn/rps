// src/types.ts
var HAND = /* @__PURE__ */ ((HAND3) => {
  HAND3[HAND3["ROCK"] = 0] = "ROCK";
  HAND3[HAND3["PAPER"] = 1] = "PAPER";
  HAND3[HAND3["SCISSORS"] = 2] = "SCISSORS";
  return HAND3;
})(HAND || {});
var RPS_RESULT = /* @__PURE__ */ ((RPS_RESULT2) => {
  RPS_RESULT2[RPS_RESULT2["WIN"] = 0] = "WIN";
  RPS_RESULT2[RPS_RESULT2["LOSE"] = 1] = "LOSE";
  RPS_RESULT2[RPS_RESULT2["DRAW"] = 2] = "DRAW";
  return RPS_RESULT2;
})(RPS_RESULT || {});

// src/rps.ts
function game(players) {
  const pHands = [...new Set(players.map((p) => p.hand))];
  if (pHands.length !== 2)
    return { draw: true };
  const winned = rpsResult(pHands[0], pHands[1]) === 0 /* WIN */ ? pHands[0] : pHands[1];
  return { winners: players.filter((p) => p.hand === winned) };
}
function makePlayer(hand) {
  assert(hand >= 0 && hand < 3, "player hands problem...");
  return {
    id: getUUID(),
    hand
  };
}
function rpsResult(myHand, otherHand) {
  return [0 /* WIN */, 1 /* LOSE */, 2 /* DRAW */][(myHand - otherHand + 2) % 3];
}
function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
export {
  HAND,
  RPS_RESULT,
  game,
  makePlayer,
  rpsResult
};
