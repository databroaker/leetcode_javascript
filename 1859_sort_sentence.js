var sortSentence = function (s) {
  let d = {};
  let splits = s.split(" ");

  for (let i = 0; i < splits.length; i++) {
    let num = parseInt(splits[i].charAt(splits[i].length - 1));
    d[num] = splits[i].slice(0, splits[i].length - 1);
  }

  let result_list = [];
  for (let i = 1; i <= splits.length; i++) {
    result_list.push(d[i]);
  }

  return result_list.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
