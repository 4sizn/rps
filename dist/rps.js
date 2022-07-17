'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var HAND = /* @__PURE__ */ ((HAND2) => {
  HAND2[HAND2["ROCK"] = 0] = "ROCK";
  HAND2[HAND2["PAPER"] = 1] = "PAPER";
  HAND2[HAND2["SCISSORS"] = 2] = "SCISSORS";
  return HAND2;
})(HAND || {});
var RPS_RESULT = /* @__PURE__ */ ((RPS_RESULT2) => {
  RPS_RESULT2[RPS_RESULT2["WIN"] = 0] = "WIN";
  RPS_RESULT2[RPS_RESULT2["LOSE"] = 1] = "LOSE";
  RPS_RESULT2[RPS_RESULT2["DRAW"] = 2] = "DRAW";
  return RPS_RESULT2;
})(RPS_RESULT || {});

function game(players) {
  const pHands = [...new Set(players.map((p) => p.hand))];
  if (pHands.length !== 2)
    return { draw: true };
  const winned = rpsResult(pHands[0], pHands[1]) === RPS_RESULT.WIN ? pHands[0] : pHands[1];
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
  return [RPS_RESULT.WIN, RPS_RESULT.LOSE, RPS_RESULT.DRAW][(myHand - otherHand + 2) % 3];
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

exports.HAND = HAND;
exports.RPS_RESULT = RPS_RESULT;
exports.game = game;
exports.makePlayer = makePlayer;
exports.rpsResult = rpsResult;
//# sourceMappingURL=rps.js.map
