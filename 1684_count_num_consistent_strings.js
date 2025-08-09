var countConsistentStrings = function (allowed, words) {
  let c = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let passes_check = true;
    for (let j = 0; j < word.length; j++) {
      if (!allowed.includes(word[j])) {
        passes_check = false;
        break;
      }
    }
    if (passes_check) {
      c++;
    }
  }
  return c;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
