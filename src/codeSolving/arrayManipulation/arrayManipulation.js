export const _arrManipilation_ = (n, queries) => {
  let array = new Array(n).fill(0);

  for (let index = 0; index < queries.length; index++) {
    const query = queries[index];
    const a = query[0] - 1;
    const b = query[1];
    const k = query[2];
    array[a] = array[a] + k;
    array[b] = array[b] - k;
  }
  let max_value = 0;
  let running_count = 0;

  for (let index = 0; index < n; index++) {
    running_count = running_count + array[index];
    if (running_count > max_value) {
      max_value = running_count;
    }
  }

  return max_value;
};
