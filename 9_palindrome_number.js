var isPalindrome = function (x) {
  return x.toString() === [...x.toString()].reverse().join("");
};

console.log(isPalindrome(121));
