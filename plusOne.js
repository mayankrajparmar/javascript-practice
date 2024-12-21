// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

const digits = [9];
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.
// const digits = [9,9]

var plusOne = function (digits) {
  let carryOn = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i] + 1;
    if (carryOn == 1) {
      digits[i] = num > 9 ? 0 : num;
      carryOn = num > 9 ? 1 : 0;
      num > 9 && i == 0 ? digits.unshift(1) : "";
    }
    if (num > 9 && i == digits.length - 1) {
      carryOn = 1;
      digits[i] = 0;
      num > 9 && i == 0 ? digits.unshift(1) : "";
    } else if (i == digits.length - 1) {
      digits[i]++;
    }
  }
  return digits;
};

console.log(plusOne(digits));
