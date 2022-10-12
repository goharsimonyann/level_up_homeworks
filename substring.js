function substring(str1, str2) {
  if (str1.length < str2.length) return "Invalid";
  let piece = "";

  for (let i = 0; i < str1.length; ++i) {
    for (let j = 0, k = i; j < str2.length; ++j, ++k) {
      piece += str1[k];
    }

    if (piece === str2) return 1;    
    piece = "";
  }

  return -1;
}

