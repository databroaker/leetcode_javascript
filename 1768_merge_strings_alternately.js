var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0,
    new_word = "";

  while (true) {
    let changed = false;

    if (i < word1.length) {
      new_word += word1[i];
      changed = true;
    }

    if (j < word2.length) {
      new_word += word2[j];
      changed = true;
    }

    if (!changed) break;

    i++;
    j++;
  }

  return new_word;
};

console.log(mergeAlternately("abc", "pqr"));
