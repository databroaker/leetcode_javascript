var differenceOfSums = function (n, m) {
  let num1 = 0,
    num2 = 0;

  for (let i = 0; i < n + 1; i++) {
    if (i % m) {
      num1 += i;
    } else {
      num2 += i;
    }
  }

  return num1 - num2;
};

console.log(differenceOfSums(10, 3));
