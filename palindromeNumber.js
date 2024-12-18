// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

const x = 1221;
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

var isPalindrome = function (x) {
  debugger;
  if (x < 0) return false;
  let text = x.toString();
  let textStart = 0;
  let textEnd = text.length - 1;
  while (textEnd >= textStart) {
    if (text[textStart] !== text[textEnd]) {
      return false;
    } else {
      textStart++;
      textEnd--;
    }
  }
  return true;
};

console.log(isPalindrome(x));
