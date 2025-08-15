var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let original_nums = nums;
  let new_nums = [];
  for (let i = 0; i < nums.length + 1; i++) {
    new_nums.push(i);
  }

  let i = 0;
  while (i <= new_nums.length) {
    if (i >= nums.length || original_nums[i] != new_nums[i]) {
      return i;
    }
    i++;
  }

  return null;
};

console.log(missingNumber([3, 0, 1]));
