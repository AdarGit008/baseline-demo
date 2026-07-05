import { test } from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/index.js";

test("adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("rejects non-numbers (negative path)", () => {
  assert.throws(() => add(2, "x"), TypeError);
});
