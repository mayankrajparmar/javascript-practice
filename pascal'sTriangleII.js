// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

const rowIndex = 3;
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

var getRow = function (rowIndex) {
  debugger;
  const result = [];
  for (let i = 1; i <= rowIndex + 1; i++) {
    let resultValue = [];
    for (let j = 0; j < i; j++) {
      if (j === i - 1 || j === 0) {
        resultValue.push(1);
      } else {
        resultValue.push(
          result[result.length - 1][j] + result[result.length - 1][j - 1]
        );
      }
    }
    result.push(resultValue);
  }
  return result[rowIndex];
};

console.log(getRow(rowIndex));
