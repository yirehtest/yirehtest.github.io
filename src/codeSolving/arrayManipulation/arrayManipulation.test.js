import { _arrManipilation_ } from "./arrayManipulation";

describe("Array manipulation", () => {
  test("should apply queries to arr have to manipulate the arr", () => {
    const q = [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ];
    const n = 10;

    const resultArr = _arrManipilation_(n, q);
    expect(resultArr).toBe(10);
  });
});
