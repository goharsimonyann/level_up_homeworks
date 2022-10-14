function uniqueCharacters(str) {
  let hashedStr = [...str].reduce((aggr, char) => {
    aggr[char] ? aggr[char]++ : aggr[char] = 1;
    return aggr;
  }, {});

  for (let i = 0; i < Object.values(hashedStr).length; ++i) {
    if (Object.values(hashedStr)[i] > 1) {
      return false;
    }
  }

  return true;
}

