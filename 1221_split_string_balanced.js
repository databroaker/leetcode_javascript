var balancedStringSplit = function (s) {
  let i = 0,
    j = 1,
    c = 0;

  while (true) {
    let slc = s.slice(i, j + 1);
    console.log(slc);
    let rs = slc.split("R").length - 1;
    let ls = slc.split("L").length - 1;
    if (rs == ls) {
      c++;
      i = j + 1;
      j = i + 1;
    } else {
      j++;
    }
    if (j >= s.length) {
      break;
    }
  }

  return c;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
