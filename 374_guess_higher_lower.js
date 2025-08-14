var guessNumber = function (n) {
  let lower = 1;
  let upper = n;

  while (lower <= upper) {
    curr = Math.floor(lower + (upper - lower) / 2);
    res = guess(curr);
    if (res == 1) {
      lower = curr + 1;
    } else if (res == -1) {
      upper = curr - 1;
    } else if (res == 0) {
      return curr;
    }
  }
};

console.log(guessNumber(10));
