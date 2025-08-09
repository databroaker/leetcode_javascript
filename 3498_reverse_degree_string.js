var reverseDegree = function (s) {
  let results = 0;
  for (let i = 0; i < s.length; i++) {
    let calc = Math.abs(s[i].charCodeAt(0) - 96 - 27);
    console.log(calc);
    results += calc * (i + 1);
  }
  return results;
};

console.log(reverseDegree("abc"));
