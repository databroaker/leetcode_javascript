var reverseVowels = function (s) {
  let vowels = "aeiou";
  let found = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      found.push(s[i]);
    }
  }

  found.reverse();

  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      s = s.substring(0, i) + found[j] + s.substring(i + 1);
      j++;
    }
  }

  return s;
};

console.log(reverseVowels("IceCreAm"));
