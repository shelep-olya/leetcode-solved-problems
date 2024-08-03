// Palindrome Number

var isPalindrome = function (x) {
  const number = x.toString().split("").reverse().join("");
  return number == x;
};
