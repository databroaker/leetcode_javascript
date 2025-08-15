var convert_to_int = function (num) {
  let digits = [];
  for (let i = 0; i < num.length; i++) {
    let ord = num[i].charCodeAt(0);
    digits.push(ord - 48);
  }
  return digits.reverse();
};

var convert_to_string = function (num_list) {
  let res = "";
  for (let i = 0; i < num_list.length; i++) {
    res += String.fromCharCode(num_list[i] + 48);
  }
  return res;
};

var addStrings = function (num1, num2) {
  let n1 = convert_to_int(num1);
  let n2 = convert_to_int(num2);

  let max_len = Math.max(n1.length, n2.length);

  let res_list = [];

  let carry = 0;

  for (let i = 0; i < max_len; i++) {
    let dig1 = n1[i];
    if (dig1 === undefined) {
      dig1 = 0;
    }

    let dig2 = n2[i];
    if (dig2 === undefined) {
      dig2 = 0;
    }

    let res = dig1 + dig2 + carry;

    if (res >= 10) {
      carry = 1;
      res -= 10;
    } else {
      carry = 0;
    }

    res_list.push(res);
  }

  if (carry) {
    res_list.push(1);
  }

  res_list.reverse();

  return convert_to_string(res_list);
};

console.log(addStrings("11", "123"));
