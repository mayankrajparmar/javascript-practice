// You are given two string arrays words1 and words2.

// A string b is a subset of string a if every letter in b occurs in a including multiplicity.

// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.

// Return an array of all the universal strings in words1. You may return the answer in any order.

// Example 1:

let words1 = ["amazon", "apple", "facebook", "google", "leetcode"],
  words2 = ["e", "o"];
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
// Output: ["apple","google","leetcode"]

// Constraints:

// 1 <= words1.length, words2.length <= 104
// 1 <= words1[i].length, words2[i].length <= 10
// words1[i] and words2[i] consist only of lowercase English letters.
// All the strings of words1 are unique.

var wordSubsets = function (words1, words2) {
  const result = [];
  let arr = [];
  let req = {}; // To store the max frequency of each character

  // Calculate the maximum frequency needed for each character from words2
  for (let word of words2) {
    let cur = {};
    for (let c of word) {
      cur[c] = (cur[c] || 0) + 1;
      req[c] = Math.max(req[c] || 0, cur[c]);
    }
  }
  for (let [ch, frq] of Object.entries(req)) {
    for (let i = 0; i < Number(frq); i++) {
      arr.push(ch);
    }
  }

  words2 = arr.join("");
  for (let i = 0; i < words1.length; i++) {
    let j = 0;
    let temp = words1[i];
    while (j < words2.length) {
      if (!temp.includes(words2[j])) break;
      temp =
        temp.slice(0, temp.indexOf(words2[j])) +
        temp.slice(temp.indexOf(words2[j]) + 1, temp.length);
      j++;
    }

    if (j == words2.length) {
      result.push(words1[i]);
    }
  }
  return result;
};

console.log(wordSubsets(words1, words2));
