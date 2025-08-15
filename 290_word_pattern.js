function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}

var wordPattern = function (pattern, s) {
  let d = {};
  let ss = s.split(" ");

  for (let i = 0; i < pattern.length; i++) {
    let p = pattern[i];
    if (!(p in d)) {
      try {
        d[p] = ss[0];
      } catch {
        return false;
      }
      ss = ss.filter((item) => item !== d[p]);
    }
  }

  d = invert(d);

  let sss = [...new Set(s.split(" "))];
  s = s.split(" ");
  let switches = [];

  for (let i = 0; i < sss.length; i++) {
    let word = sss[i];
    if (!(word in d)) {
      return false;
    }
    let match = d[word];
    for (let j = 0; j < s.length; j++) {
      if (s[j] == word && !switches.includes(j)) {
        s[j] = match;
        switches.push(j);
      }
    }
  }

  return s.join("") == pattern;
};

console.log(wordPattern("abba", "dog cat cat dog"));
