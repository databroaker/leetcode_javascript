var canPlaceFlowers = function (flowerbed, n) {
  let open = [];

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i]) {
      open.push(i);
    }
  }

  while (n > 0) {
    let found_match = false;

    for (let i = 0; i < open.length; i++) {
      let index = open[i];
      let index_left = null,
        index_right = null;

      if (index - 1 < 0) {
        index_left = 0;
      } else {
        index_left = flowerbed[index - 1];
      }

      if (index + 1 >= flowerbed.length) {
        index_right = 0;
      } else {
        index_right = flowerbed[index + 1];
      }

      if (!index_left && !index_right && !flowerbed[index]) {
        flowerbed[index] = 1;
        n -= 1;
        found_match = true;
        break;
      }
    }

    if (!found_match) {
      break;
    }
  }

  return n == 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
