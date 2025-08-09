var numJewelsInStones = function (jewels, stones) {
  let c = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      c++;
    }
  }
  return c;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
