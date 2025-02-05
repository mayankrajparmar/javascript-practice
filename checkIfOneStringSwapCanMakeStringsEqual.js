// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

// Example 1:

let s1 = "bank",
  s2 = "kanb";
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.

// Constraints:

// 1 <= s1.length, s2.length <= 100
// s1.length == s2.length
// s1 and s2 consist of only lowercase English letters.

var areAlmostEqual = function (s1, s2) {
  debugger;
  if (s1 == s2) return true;
  s1 = s1.split("");
  s2 = s2.split("");
  let count = 0,
    temp1,
    temp2;
  for (let i = 0; i < s2.length; i++) {
    if (s1[i] != s2[i] && count == 0) {
      temp1 = i;
      count++;
    } else if (s1[i] != s2[i] && count == 1) {
      temp2 = s2[i];
      s2.splice(i, 1, s2[temp1]);
      s2.splice(temp1, 1, temp2);
      count++;
    }

    if (count == 2 && s1.join("") == s2.join("")) return true;
    else if (count == 2 && s1 != s2) return false;
  }
  return false;
};

console.log(areAlmostEqual(s1, s2));
