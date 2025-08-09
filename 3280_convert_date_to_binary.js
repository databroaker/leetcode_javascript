var convertDateToBinary = function (date) {
  let splits = date.split("-");
  let new_list = [];
  for (let i = 0; i < splits.length; i++) {
    let number = parseInt(splits[i]);
    new_list.push(number.toString(2));
  }
  return new_list.join("-");
};

console.log(convertDateToBinary("2080-02-29"));
