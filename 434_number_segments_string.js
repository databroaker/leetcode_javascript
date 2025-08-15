var countSegments = function (s) {
  if (s.trim().length == 0) {
    return 0;
  }

  let splits = s.trim().split(/\s+/);

  return splits.length;
};

console.log(countSegments("   "));
