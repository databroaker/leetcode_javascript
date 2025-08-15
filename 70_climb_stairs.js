var climbStairs = function (n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let tmp_a = a;
    let tmp_b = b;

    a = tmp_b;
    b = tmp_a + tmp_b;
  }

  return b;
};

console.log(climbStairs(2));
