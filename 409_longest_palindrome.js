var longestPalindrome = function (s) {
  let letters = {};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in letters) {
      letters[s[i]] = letters[s[i]] + 1;
    } else {
      letters[s[i]] = 1;
    }
  }
  let single = false;
  for (key in letters) {
    entry = letters[key];
    if (entry >= 2) {
      total += Math.floor(entry / 2) * 2;
      entry -= Math.floor(entry / 2) * 2;
    }

    if (entry == 1 && !single) {
      total++;
      single = true;
    }
  }
  return total;
};

console.log(longestPalindrome("ccc"));
