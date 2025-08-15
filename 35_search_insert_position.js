var searchInsert = function (nums, target) {
  let prev = nums[0];
  if (target == prev) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];
    if (n == target) {
      return i;
    }
    if (prev < target && target < n) {
      return i;
    }
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  if (target < nums[0]) {
    return 0;
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));
