export const matchingChars = (str) => {
  const strSet = new Set(str);
  const strSetArr = [...strSet];
  const charCount = {};
  for (let index = 0; index < strSetArr.length; index++) {
    const char = strSetArr[index];
    const regex = new RegExp(char, "g");
    const count = str.match(regex).length;
    if (count > 1) charCount[char] = count;
  }

  return charCount;
};
