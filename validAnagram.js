// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function (s, t) {
  //     s = s.split('').sort().join('');
  //     t = t.split('').sort().join('');

  //    if(s==t){
  //     return true
  //    } else return false
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) != -1) {
      t = t.replace(s[i], "_");
    } else return false;
  }
  return true;
};

console.log(isAnagram(s, t));
