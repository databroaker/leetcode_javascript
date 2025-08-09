var sortPeople = function (names, heights) {
  let d = {};

  for (let i = 0; i < heights.length; i++) {
    d[heights[i]] = names[i];
  }

  heights.sort((a, b) => a - b).reverse();
  let sorted_people = [];

  for (let i = 0; i < heights.length; i++) {
    sorted_people.push(d[heights[i]]);
  }

  console.log(heights);

  return sorted_people;
};

console.log(
  sortPeople(
    [
      "IEO",
      "Sgizfdfrims",
      "QTASHKQ",
      "Vk",
      "RPJOFYZUBFSIYp",
      "EPCFFt",
      "VOYGWWNCf",
      "WSpmqvb",
    ],
    [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]
  )
);
