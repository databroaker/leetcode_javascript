var reversePrefix = function (word, ch) {
  let i = word.indexOf(ch);
  let prefix = word.slice(0, i + 1);
  let reversed = [...prefix].reverse().join("");
  return reversed + word.slice(i + 1, word.length);
};

console.log(reversePrefix("abcdefd", "d"));
