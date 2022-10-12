function uniqueCharacters(str) {
  let charArr = str
    .split("")
    .map((char, i) => {
      return str.charCodeAt(i);
    })
    .sort();

  for (let i = 0; i < charArr.length; ++i) {
    if (charArr[i] === charArr[i + 1]) return false;
  }

  return true;
}
