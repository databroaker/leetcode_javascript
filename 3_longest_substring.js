var lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let tmp = "";
    for (let ii = i; ii < s.length; ii++) {
      if (!tmp.includes(s[ii])) {
        tmp += s[ii];
      } else {
        break;
      }
    }
    if (tmp.length > max) {
      max = tmp.length;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
