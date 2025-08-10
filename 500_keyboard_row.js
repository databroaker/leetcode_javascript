var findWords = function (words) {
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let results = [];

  for (let i = 0; i < words.length; i++) {
    let selected = -1;
    let match = true;
    let word = words[i];

    for (let j = 0; j < word.length; j++) {
      let letter = word[j].toLowerCase();
      if (selected == -1) {
        for (let k = 0; k < rows.length; k++) {
          if (rows[k].includes(letter)) {
            selected = k;
            break;
          }
        }
      }

      if (!rows[selected].includes(letter)) {
        match = false;
      }
    }

    if (match) results.push(word);
  }

  return results;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
