var addBinary = function (a, b) {
  let a_list = [...a.toString()].reverse().join("");
  let b_list = [...b.toString()].reverse().join("");

  let n1 = a_list;
  let n2 = b_list;

  if (a_list.length < b_list.length) {
    n1 = b_list;
    n2 = a_list;
  }

  let i = 0;
  let carry = 0;
  let result = [];

  for (let j = 0; j < n1.length; j++) {
    let t1 = n1[j];

    let t2 = "0";
    try {
      t2 = n2[i];
    } catch {}

    ones = [t1, t2, carry].join("").split("1").length - 1;

    if (ones == 3) {
      carry = "1";
      result.push("1");
    }
    if (ones == 2) {
      carry = "1";
      result.push("0");
    }
    if (ones == 1) {
      carry = "0";
      result.push("1");
    }
    if (ones == 0) {
      carry = "0";
      result.push("0");
    }

    i++;
  }

  if (carry === "1") {
    result.push(carry);
  }

  result.reverse();

  return result.join("");
};

console.log(addBinary("1010", "1011"));
