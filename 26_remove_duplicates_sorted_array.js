var removeDuplicates = function (nums) {
  let tracker = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] in tracker) {
      nums.splice(i, 1);
    } else {
      tracker[nums[i]] = null;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
