var addDigits = function (num) {
  let snum = num.toString();

  while (snum.length > 1) {
    let digits = [];
    let sum = 0;
    for (let i = 0; i < snum.length; i++) {
      digits.push(parseInt(snum[i]));
    }
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    snum = sum.toString();
  }

  return parseInt(snum);
};

console.log(addDigits(38));
