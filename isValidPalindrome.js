// Valid Palindrome
var isPalindrome = function (s) {
  const r = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const newWord = r.split("").reverse().join("");
  return newWord === r;
};
