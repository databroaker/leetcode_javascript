var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] == [...words[i]].reverse().join("")) {
      return words[i];
    }
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
