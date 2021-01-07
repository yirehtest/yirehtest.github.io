export function countTriplets(arr, r) {
  let count = 0;
  const mapped = {};
  const doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let rx = x * r;
    let r2x = rx * r;
    let pairWeWant = [rx, r2x];
    if (doubles[pairWeWant] !== undefined) {
      count = count + doubles[pairWeWant];
    }
    let doub = [x, rx];
    if (doubles[doub] === undefined) doubles[doub] = 0;
    doubles[doub] = doubles[doub] + (mapped[rx] === undefined ? 0 : mapped[rx]);
    // Add x to mapped
    console.log({ mapped });

    mapped[x] === undefined ? (mapped[x] = 1) : mapped[x]++;
    console.log({ mapped });
    console.log({ doubles, pairWeWant, doub, arr, r });
  }

  return count;
}
