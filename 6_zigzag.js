var convert = function (s, numRows) {
  if (numRows == 1) {
    return s;
  }

  let r = 0;
  let dir = 1;

  let zig = [];

  for (let i = 0; i < numRows; i++) {
    zig.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    zig[r].push(s[i]);

    if (dir == 1) {
      if (r >= numRows - 1) {
        dir = -1;
        r--;
      } else {
        r++;
      }
    } else {
      if (r <= 0) {
        dir = 1;
        r++;
      } else {
        r--;
      }
    }
  }

  let return_str = "";
  for (let i = 0; i < zig.length; i++) {
    for (let j = 0; j < zig[i].length; j++) {
      return_str += zig[i][j];
    }
  }

  return return_str;
};

console.log(convert("AB", 1));
