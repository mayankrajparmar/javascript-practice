// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.

// Example 1:

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

var intersection = function (nums1, nums2) {
  const arr = [];
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        if (!arr.includes(nums2[i])) {
          arr.push(nums2[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        if (!arr.includes(nums1[i])) {
          arr.push(nums1[i]);
        }
      }
    }
  }

  return arr;
};

console.log(intersection(nums1, nums2));
