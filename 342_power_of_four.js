var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }

  let power = 1;

  while (power <= n) {
    if (power == n) {
      return true;
    }
    power *= 4;
  }

  return false;
};

console.log(isPowerOfFour(16));
