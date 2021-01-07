export const anagramChecker = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) {
    return false;
  }

  const str1Set = new Set(str1);
  const str2Set = new Set(str2);

  if (str1Set.size !== str2Set.size) {
    return false;
  }
  let result = true;
  str1Set.forEach((char) => {
    if (str2Set.has(char)) {
      return true;
    }
    result = false;
    return false;
  });
  return result;
};
