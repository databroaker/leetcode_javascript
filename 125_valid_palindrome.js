var isPalindrome = function (s) {
  let alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  let word = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i].toLowerCase();
    if (alpha.includes(letter)) {
      word += letter;
    }
  }

  let reverse = [...word].reverse().join("");

  return word === reverse;
};

console.log(isPalindrome("0P"));
