var containsDuplicate = function (nums) {
  let d = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num in d) {
      return true;
    } else {
      d[num] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
