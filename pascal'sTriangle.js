// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

const numRows = 5;
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// const numRows = 1;
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

var generate = function(numRows) {
  const result = [];
  for (let i = 1; i <= numRows; i++) {
  let resultValue = [];
    for (let j = 0; j < i; j++) {
      if(j === i-1 || j === 0){
        resultValue.push(1)
      }else{
        resultValue.push(result[result.length -1][j] + result[result.length -1][j-1])
      }
    }
    result.push(resultValue);
  }
  return result;
};

console.log(generate(numRows));
