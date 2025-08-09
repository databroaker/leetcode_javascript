var findClosest = function (x, y, z) {
  let calc_x = Math.abs(z - x);
  let calc_y = Math.abs(z - y);

  if (calc_x < calc_y) {
    return 1;
  } else if (calc_x > calc_y) {
    return 2;
  } else if (calc_x == calc_y) {
    return 0;
  }

  return 0;
};

console.log(findClosest(2, 7, 4));
