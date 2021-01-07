import { matchingChars } from "./matchingChars";

describe("matchingChars", () => {
  test("", () => {
    const str = "aabbcccqwert";
    const matchingCharsArr = matchingChars(str);
    expect(matchingCharsArr).toStrictEqual({ a: 2, b: 2, c: 3 });
  });
});
