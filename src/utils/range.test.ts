import { expect, test } from "vitest";
import { range } from "./range.js";

test("creates simple range", () => {
  expect(range(1, 3)).toStrictEqual([1, 2, 3]);
});

test("creates range when start is above 1h", () => {
  expect(range(2, 10)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("creates range when start is negative", () => {
  expect(range(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]);
});

test("creates range when entire range is negative", () => {
  expect(range(-10, -2)).toStrictEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2]);
});

test("create range when start and end are the same", () => {
  expect(range(3, 3)).toStrictEqual([3]);
});

test("throws an error when start is before end", () => {
  expect(() => range(10, 1)).toThrowError("start must be less than end");
});
