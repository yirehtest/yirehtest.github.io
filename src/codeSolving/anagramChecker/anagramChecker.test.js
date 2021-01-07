import { anagramChecker } from "./anagramChecker";

describe("anagram checker", () => {
  test("should test positive anagram", () => {
    const result = anagramChecker("qwertyuiop", "poiuytrewq");
    const result2 = anagramChecker("123455", "123455");
    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  test("should test negative anagram", () => {
    const result = anagramChecker("qwertyuiop", "poiuytrew1");
    const result2 = anagramChecker("qwertyui", "poiuytrew1");
    expect(result).toBe(false);
    expect(result2).toBe(false);
  });
});
