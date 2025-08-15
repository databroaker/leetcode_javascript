var thirdMax = function (nums) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => b - a);
  return nums.length >= 3 ? nums[2] : nums[0];
};

console.log(thirdMax([3, 2, 1]));
