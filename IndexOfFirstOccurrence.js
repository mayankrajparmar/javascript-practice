// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

const haystack = "sadbutsad";
const needle = "sad";
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle)
// };

var strStr = function (haystack, needle) {
  if (needle.length <= haystack.length) {
    let i = 0;
    while (i < haystack.length) {
      if (
        haystack[i] === needle[0] &&
        haystack.slice(i, i + needle.length) === needle
      ) {
        return i;
      }
      i++;
    }
    return -1;
  } else return -1;
};

console.log(strStr(haystack, needle));
