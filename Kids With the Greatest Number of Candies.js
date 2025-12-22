var kidsWithCandies = function (candies, extraCandies) {
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    let isGreatest = true;

    for (let j = 0; j < candies.length; j++) {
      if (candies[i] + extraCandies < candies[j]) {
        isGreatest = false;
        break;
      }
    }

    result.push(isGreatest);
  }

  return result;
};
