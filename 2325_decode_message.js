var decodeMessage = function (key, message) {
  let d = {};
  let x = 97;

  for (let i = 0; i < key.length; i++) {
    if (key[i] === " ") continue;
    if (!(key[i] in d)) {
      d[key[i]] = String.fromCharCode(x);
      console.log(key[i], String.fromCharCode(x));
      x++;
    }
  }

  let results = "";

  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      results += " ";
    } else {
      results += d[message[i]];
    }
  }
  return results;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
