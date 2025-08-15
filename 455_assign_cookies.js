var findContentChildren = function (g, s) {
  let c = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (j >= g.length) {
      break;
    }

    let gg = g[j];

    if (s[i] >= gg) {
      c++;
      j++;
    }
  }

  return c;
};

console.log(findContentChildren([1, 2, 3], [3]));
