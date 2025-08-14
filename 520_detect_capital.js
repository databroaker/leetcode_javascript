var detectCapitalUse = function (word) {
  let all_caps = word.toUpperCase();
  let all_lows = word.toLowerCase();
  let first_cap = all_caps.slice(0, 1) + all_lows.slice(1, all_lows.length);

  return word === all_caps || word === all_lows || word === first_cap;
};

console.log(detectCapitalUse("USA"));
