var reverse = function (x) {
  let rev_x = x.toString().split("").reverse().join("");

  let sign = 1;

  if (rev_x.includes("-")) {
    rev_x = rev_x.replace("-", "");
    sign = -1;
  }

  let new_x = parseInt(rev_x);

  if (new_x > 2 ** 31 - 1) {
    return 0;
  } else {
    return rev_x * sign;
  }
};

console.log(reverse(123));
