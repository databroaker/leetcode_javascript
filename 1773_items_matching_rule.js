var countMatches = function (items, ruleKey, ruleValue) {
  let attributes = {
    type: 0,
    color: 1,
    name: 2,
  };

  let c = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][attributes[ruleKey]] == ruleValue) c++;
  }

  return c;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
