import fizzBuzz from "./fizz-buzz";
import { test, expect } from "vitest";

test("returns 'FizzBuzz' for multiples of 3 and 5", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(45)).toBe("FizzBuzz");
});
