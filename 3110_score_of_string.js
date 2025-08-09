var scoreOfString = function (s) {
  let results = 0;
  let previous = s[0].charCodeAt(0);

  let index = 1;

  while (true) {
    let current = s[index].charCodeAt(0);
    results += Math.abs(current - previous);
    index++;
    previous = current;
    if (index >= s.length) {
      break;
    }
  }

  return results;
};

console.log(scoreOfString("hello"));
