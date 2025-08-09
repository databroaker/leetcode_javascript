var isAcronym = function (words, s) {
  var letters = [];
  for (let i = 0; i < words.length; i++) {
    letters.push(words[i].slice(0, 1));
  }
  return letters.join("") == s;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
