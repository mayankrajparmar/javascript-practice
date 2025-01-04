// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// let s = "A man, a plan, a canal: Panama";
let s = "A man, a plan, a canal: Panama";
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function (s) {
  // let temp = "";
  // for (let i=0; i < s.length; i++) {
  //   if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90) {
  //     s = s.replace(s[i], s[i].toLowerCase());
  //   }
  //   if ((97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) || (
  //   48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57
  // ) ) {
  //     temp = temp + s[i];
  //   }
  // }
  // for (let j = 0; j < (temp.length-1) / 2; j++) {
  //   if (temp[j] != temp[temp.length - (j + 1)]) {
  //     return false;
  //   }
  // }
  // return true;

  let temp = s.replace(/[^A-Z0-9]+/gi, "");
  let str = temp.toLowerCase();
  let revesestr = temp.split("").reverse().join("").toLowerCase();
  return str == revesestr;
};

console.log(isPalindrome(s));
