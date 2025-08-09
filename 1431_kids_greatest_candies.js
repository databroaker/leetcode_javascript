var kidsWithCandies = function (candies, extraCandies) {
  let maximum = Math.max(...candies);
  let return_list = [];
  for (let i = 0; i < candies.length; i++) {
    return_list.push(candies[i] + extraCandies >= maximum);
  }
  return return_list;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
