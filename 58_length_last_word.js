var lengthOfLastWord = function (s) {
  let splits = s.trim().split(/\s+/);
  let last = splits[splits.length - 1];
  return last.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
