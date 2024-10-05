import { expect, test } from "vitest";
import { leftPad } from "./leftPad";

test("pads correctly", () => {
  expect(leftPad("1", 2)).toStrictEqual("  1");
});

test("pads correctly with custom character supplied", () => {
  expect(leftPad("1", 3, "0")).toStrictEqual("0001");
});

test("adds no extra characters if supplied string is equal to length", () => {
  expect(leftPad("11", 2, "0")).toStrictEqual("11");
});

test("adds no extra characters if supplied string is greater than length", () => {
  expect(leftPad("123", 2, "0")).toStrictEqual("123");
});

test("throws an error when character supplied has a length greater than one", () => {
  expect(() => leftPad("1", 2, "00")).toThrowError(
    "character should have length of one",
  );
});

test("throws an error when character supplied has a length less than one", () => {
  expect(() => leftPad("1", 2, "")).toThrowError(
    "character should have length of one",
  );
});
