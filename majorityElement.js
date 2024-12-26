// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

const nums = [2, 2, 1, 1, 1, 2, 2];
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

var majorityElement = function (nums) {
  debugger;
  nums = nums.sort((a, b) => a - b);
  let count = 1;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      count++
    } else if (nums[i] != nums[i + 1]) {
      if (count > nums.length / 2) {
        return nums[i];
      } else {
        count = 1;
      }
    }
  }
};
console.log(majorityElement(nums));
