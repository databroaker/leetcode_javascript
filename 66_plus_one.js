var plusOne = function (digits) {
  let strr = "";
  for (let i = 0; i < digits.length; i++) {
    strr += digits[i].toString();
  }
  strr = (parseInt(strr) + 1).toString();

  digits = [];

  for (let i = 0; i < strr.length; i++) {
    digits.push(parseInt(strr[i]));
  }

  return digits;
};

console.log(plusOne([1, 2, 3]));
