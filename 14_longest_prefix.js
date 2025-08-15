var longestCommonPrefix = function (strs) {
  let prefix = "";

  let shortest = strs.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });

  for (let i = 0; i < shortest.length; i++) {
    let letter = strs[0][i];
    let same = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != letter) {
        same = false;
        break;
      }
    }
    if (same) {
      prefix += letter;
    } else {
      return prefix;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["cir", "car"]));
