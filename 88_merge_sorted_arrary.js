var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
