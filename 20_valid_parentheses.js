var isValid = function (s) {
  let stack = [];
  let opening = "([{";
  let closing = ")]}";
  let i = 0;

  while (true) {
    let c = s[i];
    if (opening.includes(c)) {
      stack.splice(0, 0, c);
    } else if (closing.includes(c)) {
      let top = "N";
      if (stack) {
        top = stack[0];
      } else {
        return false;
      }

      if (
        (c == ")" && top == "(") ||
        (c == "]" && top == "[") ||
        (c == "}" && top == "{")
      ) {
        stack.shift();
      } else {
        return false;
      }
    }

    i++;
    if (i >= s.length) {
      break;
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("()"));
