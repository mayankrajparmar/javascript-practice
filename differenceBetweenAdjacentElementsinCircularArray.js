// Given a circular array nums, find the maximum absolute difference between adjacent elements.

// Note: In a circular array, the first and last elements are adjacent.

//

// Example 1:

const nums = [1, 2, 4];

// Output: 3

// Explanation:

// Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.

// Example 2:

// Input: nums = [-5,-10,-5]

// Output: 5

// Explanation:

// The adjacent elements nums[0] and nums[1] have the maximum absolute difference of |-5 - (-10)| = 5.

//

// Constraints:

// 2 <= nums.length <= 100
// -100 <= nums[i] <= 100

var maxAdjacentDistance = function (nums) {
  let diff = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    if (i != nums.length - 1) {
      j = i + 1;
    } else j = 0;
    if (nums[i] > nums[j]) {
      temp = nums[i] - nums[j];
    } else temp = nums[j] - nums[i];
    if (temp > diff) diff = temp;
  }
  return diff;
};

console.log(maxAdjacentDistance(nums));
