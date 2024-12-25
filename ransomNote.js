// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

let ransomNote = "aab";
let magazine = "baa";
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct = function (ransomNote, magazine) {
  for (i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) != -1) {
      magazine = magazine.replace(ransomNote[i], "_");
    } else return false;
  }
  return true;
};

console.log(canConstruct(ransomNote, magazine));
