var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];
    if (!magazine.includes(char)) {
      return false;
    } else {
      magazine = magazine.replace(char, "");
    }
  }
  return true;
};

console.log(canConstruct("aa", "ab"));
