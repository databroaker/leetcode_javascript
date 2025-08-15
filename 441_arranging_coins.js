var arrangeCoins = function (n) {
  let rows = 0;
  let amt = 1;

  while (true) {
    if (n >= amt) {
      n -= amt;
      rows += 1;
      amt += 1;
    } else {
      break;
    }
  }

  return rows;
};

console.log(arrangeCoins(5));
