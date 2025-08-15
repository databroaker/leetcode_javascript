var plusOne = function (digits) {
  let strr = "";
  for (let i = 0; i < digits.length; i++) {
    strr += digits[i].toString();
  }

  let int_num = BigInt(strr);
  int_num++;

  strr = int_num.toString();

  digits = [];

  for (let i = 0; i < strr.length; i++) {
    digits.push(parseInt(strr[i]));
  }

  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
