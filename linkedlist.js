// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// const l1 = [2, 4, 3],
//   l2 = [5, 6, 4];
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

const l1 = [0],
  l2 = [0];
// Output: [0]
// Example 3:
 
// const l1 = [9, 9, 9, 9, 9, 9, 9],
//   l2 = [9, 9, 9, 9];
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function (l1, l2) {
  const result = [];
  let carry = 0;
  let i = l1.length - 1;
  let j = l2.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = 0;
    if (i < 0) {
      sum = l2[j] + carry;
    } else if (j < 0) {
      sum = l1[i] + carry;
    } else {
      sum = l1[i] + l2[j] + carry;
    }
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else carry = 0;
    result.push(sum);
    i--;
    j--;
  }

  if (carry != 0) {
    result.push(carry);
  }

  return result;
};

console.log(addTwoNumbers(l1, l2));
