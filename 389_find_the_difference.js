var findTheDifference = function (s, t) {
  for (let i = s.length - 1; i >= 0; i--) {
    t = t.replace(s[i], "");
  }
  return t;
};

console.log(findTheDifference("abcd", "abcde"));
