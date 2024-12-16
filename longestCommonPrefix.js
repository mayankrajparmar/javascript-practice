// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

const strs = ["flower", "flow", "flight"];
// Output: "fl"
// Example 2:

// const strs = ["dog", "racecar", "car"];
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
  let arr = strs.sort();
  //   for (let i = 0; i < strs.length; i++) {
  //     if (arr.length == 0) {
  //       arr.push(strs[i]);
  //     } else
  //       for (let j = 0; j < arr.length; j++) {
  //         if (strs[i] > arr[j] && j == arr.length - 1) {
  //           arr.push(strs[i]);
  //         } else if (strs[i] < arr[j] && j == 0) {
  //           arr.unshift(strs[i]);
  //         } else if (strs[i] > arr[j] && strs[i] < arr[j + 1]) {
  //           arr.splice(j + 1, 0, strs[i]);
  //         }
  //       }
  //   }
  let first = arr[0];
  let last = arr[arr.length - 1];
  let min = Math.min(first.length, last.length);
  let num = 0;

  while (num < min && first[num] == last[num]) {
    num++;
  }
  debugger;
  return first.substring(0, num) || "";
};

console.log(longestCommonPrefix(strs));
