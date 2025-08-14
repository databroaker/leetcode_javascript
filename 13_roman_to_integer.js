var romanToInt = function (s) {
  let result = 0;
  let r = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < s.length; i++) {
    let curr = r[s[i]];
    let next = i + 1 < s.length ? r[s[i + 1]] : 0;
    if (curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
