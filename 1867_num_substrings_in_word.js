var numOfStrings = function (patterns, word) {
  let c = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) c++;
  }
  return c;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
