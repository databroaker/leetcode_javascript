var runningSum = function (nums) {
  let res = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    res.push(nums[i] + res[i - 1]);
  }
  return res;
};

console.log(runningSum([1, 2, 3, 4]));
