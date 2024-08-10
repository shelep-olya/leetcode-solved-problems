// Move Zeroes

var moveZeroes = function (nums) {
  var numbers = [];
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      numbers.push(nums[i]);
    } else {
      count++;
    }
  }

  for (let i = 0; i < count; i++) {
    numbers.push(0);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = numbers[i];
  }

  return nums;
};
