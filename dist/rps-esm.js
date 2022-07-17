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
    id: window.crypto.randomUUID(),
    hand
  };
}
function makeComputer() {
  const randomHand = window.crypto.getRandomValues(new Uint32Array(1)).at(0) % 2;
  return makePlayer(randomHand);
}
function rpsResult(myHand, otherHand) {
  return [0 /* WIN */, 1 /* LOSE */, 2 /* DRAW */][(myHand - otherHand + 2) % 3];
}
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
export {
  game,
  makeComputer,
  makePlayer,
  rpsResult
};
