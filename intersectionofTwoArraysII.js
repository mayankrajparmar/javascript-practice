// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// let nums1 = [1, 2, 2, 1],
//   nums2 = [2, 2];
// Output: [2,2]
// Example 2:

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

var intersect = function (nums1, nums2) {
  //   const arr = [];
  //   if (nums1.length > nums2.length) {
  //     for (let i = 0; i < nums2.length; i++) {
  //       if (nums1.findIndex((element) => element == nums2[i]) != -1) {
  //         arr.push(nums2[i]);
  //         nums1.splice(
  //           nums1.findIndex((element) => element == nums2[i]),
  //           1
  //         );
  //       }
  //     }
  //   } else {
  //     for (let i = 0; i < nums1.length; i++) {
  //       if (nums2.findIndex((element) => element == nums1[i]) != -1) {
  //         arr.push(nums1[i]);
  //         nums2.splice(
  //           nums2.findIndex((element) => element == nums1[i]),
  //           1
  //         );
  //       }
  //     }
  //   }

  //   return arr;

  nums1.sort((a, b) => a - b), nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    arr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      arr.push(nums1[i]);
      i++;
      j++;
    }
  }

  return arr;
};

console.log(intersect(nums1, nums2));
