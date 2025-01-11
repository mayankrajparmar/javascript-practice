// Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

// Example 1:

// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
// Example 2:

// const s = "leetcode",
// k = 3;
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.
// Example 3:

const s = "true",
  k = 4;
// Output: true
// Explanation: The only possible solution is to put each character in a separate string.

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= 105

var canConstruct = function (s, k) {
  debugger;
  if (s.length < k) return false;

  let arr = [...s].sort();
  let oddCount = 0;

  for (let i = 0; i < arr.length; ) {
    let current = arr[i];
    let count = 0;
    while (i < arr.length && arr[i] === current) {
      count++;
      i++;
    }
    if (count % 2 !== 0) oddCount++;
  }

  return oddCount <= k;
};

console.log(canConstruct(s, k));
