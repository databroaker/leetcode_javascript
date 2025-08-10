var countHillValley = function (nums) {
  let c = 0;
  let tracker = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    let curr = nums[i];
    let left = nums[tracker];
    let right = nums[i + 1];

    if (curr == right) continue;

    if (left < curr && right < curr) {
      c++;
      tracker = i;
    }
    if (left > curr && right > curr) {
      c++;
      tracker = i;
    }
  }

  return c;
};

console.log(countHillValley([8, 2, 5, 7, 7, 2, 10, 3, 6, 2]));
