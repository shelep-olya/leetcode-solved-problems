// Single Number

var singleNumber = function (nums) {
  var newNums = [];
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      newNums.push(nums[i]);
    }
  }
  return newNums;
};
