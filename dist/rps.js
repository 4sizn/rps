"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/rps.ts
var rps_exports = {};
__export(rps_exports, {
  game: () => game,
  makeComputer: () => makeComputer,
  makePlayer: () => makePlayer,
  rpsResult: () => rpsResult
});
module.exports = __toCommonJS(rps_exports);
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
