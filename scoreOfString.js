// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:

let s = "zaz";

// Output: 50

// Explanation:

// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

// Constraints:

// 2 <= s.length <= 100
// s consists only of lowercase English letters.

var scoreOfString = function (s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) > s.charCodeAt(i + 1)) {
      score = score + (s.charCodeAt(i) - s.charCodeAt(i + 1));
    } else {
      score = score + (s.charCodeAt(i + 1) - s.charCodeAt(i));
    }
  }
  return score;
};

console.log(scoreOfString(s));
