// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

const nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

var moveZeroes = function (nums) {
  // let separr = [];
  // if (nums.length == 1) return nums;
  // for (let i = 0; i < nums.length; i++) {
  //    if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     separr.push(0)
  //     i--;
  //   }
  // }
  // return nums.concat(separr);
  let left = 0, right = 0, tmp = 0;
  while(nums.length > right) {
    if(nums[right]) {
      if(nums[left] === 0) {
        tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
      }
      left++;
    }
    right++;
  }
  return nums
};

console.log(moveZeroes(nums));
