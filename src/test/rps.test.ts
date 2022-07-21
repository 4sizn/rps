import { makePlayer, game, rpsResult, makeComputer } from "../rps";
import { HAND, RPS_RESULT } from "../types";

describe("check rps logic", () => {
  test("win", () => {
    expect(
      rpsResult(makePlayer(HAND.ROCK).hand, makePlayer(HAND.SCISSORS).hand)
    ).toBe(RPS_RESULT.WIN); //ROCK  to win
    expect(
      rpsResult(makePlayer(HAND.PAPER).hand, makePlayer(HAND.ROCK).hand)
    ).toBe(RPS_RESULT.WIN); //Paper to win
    expect(
      rpsResult(makePlayer(HAND.SCISSORS).hand, makePlayer(HAND.PAPER).hand)
    ).toBe(RPS_RESULT.WIN); //SCISSORS to win
  });
  test("lose", () => {
    expect(
      rpsResult(makePlayer(HAND.ROCK).hand, makePlayer(HAND.PAPER).hand)
    ).toBe(RPS_RESULT.LOSE); //lose
    expect(
      rpsResult(makePlayer(HAND.PAPER).hand, makePlayer(HAND.SCISSORS).hand)
    ).toBe(RPS_RESULT.LOSE); //lose
    expect(
      rpsResult(makePlayer(HAND.SCISSORS).hand, makePlayer(HAND.ROCK).hand)
    ).toBe(RPS_RESULT.LOSE); //lose
  });
  test("draw", () => {
    expect(
      rpsResult(makePlayer(HAND.ROCK).hand, makePlayer(HAND.ROCK).hand)
    ).toBe(RPS_RESULT.DRAW); //draw
    expect(
      rpsResult(makePlayer(HAND.PAPER).hand, makePlayer(HAND.PAPER).hand)
    ).toBe(RPS_RESULT.DRAW); //draw
    expect(
      rpsResult(makePlayer(HAND.SCISSORS).hand, makePlayer(HAND.SCISSORS).hand)
    ).toBe(RPS_RESULT.DRAW); //draw
  });
});

describe("check rps group logic", () => {
  test("winner", () => {
    expect(
      game([makePlayer(HAND.ROCK), makePlayer(HAND.SCISSORS)])
    ).toMatchObject({
      winners: [{ hand: HAND.ROCK }],
    });
    expect(
      game([
        makePlayer(HAND.PAPER),
        makePlayer(HAND.ROCK),
        makePlayer(HAND.ROCK),
      ])
    ).toMatchObject({
      winners: [{ hand: HAND.PAPER }],
    });
    expect(
      game([
        makePlayer(HAND.SCISSORS),
        makePlayer(HAND.PAPER),
        makePlayer(HAND.PAPER),
        makePlayer(HAND.PAPER),
      ])
    ).toMatchObject({
      winners: [{ hand: HAND.SCISSORS }],
    });
  });
  test("draw", () => {
    expect(game([makePlayer(HAND.ROCK), makePlayer(HAND.ROCK)])).toEqual({
      draw: true,
    });
    expect(game([makePlayer(HAND.PAPER), makePlayer(HAND.PAPER)])).toEqual({
      draw: true,
    });
    expect(
      game([makePlayer(HAND.SCISSORS), makePlayer(HAND.SCISSORS)])
    ).toEqual({ draw: true });
  });
});

describe("check computer", () => {
  test("make computer", () => {
    expect(makeComputer()).toHaveProperty("id");
    expect(makeComputer()).toHaveProperty("hand");
  });

  test("play game with computer", () => {
    expect(game([makeComputer(), makeComputer()]));
  });
});
