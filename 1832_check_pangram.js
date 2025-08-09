var checkIfPangram = function (sentence) {
  let letters = {};
  let total = 26;

  for (let i = 97; i < 97 + 26; i++) {
    letters[String.fromCharCode(i)] = 1;
  }

  for (let i = 0; i < sentence.length; i++) {
    if (letters[sentence[i]]) {
      letters[sentence[i]]--;
      total--;
    }
  }

  return total == 0;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
