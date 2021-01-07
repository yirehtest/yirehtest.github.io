import { countTriplets } from "./countTriplets";

describe("Array manipulation", () => {
  //   test("should count triplets", () => {
  //     const resultArr = countTriplets("1 3 9 9 27 81".split(" "), 3);
  //     expect(resultArr).toBe(6);
  //   });

  test("should count triplets with ramdom numbers", () => {
    const resultArr = countTriplets("1 2 1 2 4".split(" "), 2);
    expect(resultArr).toBe(3);
  });
});
