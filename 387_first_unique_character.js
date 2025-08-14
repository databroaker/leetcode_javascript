var firstUniqChar = function (s) {
  let d = {};
  for (let i = 0; i < s.length; i++) {
    d[s[i]] = s[i] in d ? d[s[i]] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (d[s[i]] == 1) return i;
  }
  return -1;
};

console.log(firstUniqChar("aabb"));
