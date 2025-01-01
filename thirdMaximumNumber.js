// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// const nums = [2, 2, 3, 1];
const nums = [1, 2, -2147483648];
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

var thirdMax = function (nums) {
  let largest = nums[0];
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = nums[i];
    } else if (
      nums[i] < largest &&
      nums[i] < secondLargest &&
      nums[i] > thirdLargest
    ) {
      thirdLargest = nums[i];
    }
  }
  return thirdLargest != -Infinity ? thirdLargest : largest;
};

console.log(thirdMax(nums));
