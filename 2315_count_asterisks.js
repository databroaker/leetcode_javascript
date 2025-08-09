var countAsterisks = function (s) {
  let brackets = 0;
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (!brackets && s[i] === "*") {
      c++;
    }
    if (s[i] === "|") {
      brackets = (brackets + 1) % 2;
    }
  }
  return c;
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));
