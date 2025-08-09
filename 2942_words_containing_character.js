var findWordsContaining = function (words, x) {
  let indexes = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      indexes.push(i);
    }
  }
  return indexes;
};

console.log(findWordsContaining(["leet", "code"], "e"));
