// Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)

// (Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

// Since the answer may be large, return the answer modulo 10^9 + 7.

// Example 1:

let n = 100;
// Output: 12
// Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
// Example 2:

// Input: n = 100
// Output: 682289015

// Constraints:

// 1 <= n <= 100

const factorial = n =>
  n <= 1 ? 1n : (BigInt(n) * factorial(n - 1)) % 1000000007n;

var numPrimeArrangements = function (n) {
  primeCount = 0;
  nonprimeCount =0;
  for (let index = 1; index <= n; index++) {
    isPrime(index) ? primeCount ++ : nonprimeCount++
  }
  
  let multi = ((factorial(primeCount)) * (factorial(n-primeCount))) % 1000000007n
  console.log(multi)
};

function isPrime (num) {
  s = Math.sqrt(num)

  for (let i = 2; i <= s; i++) {
      if (num % i == 0) return false
  }

  return num > 1
}



// var numPrimeArrangements = function(n) {
//   a = 0, b = 0, res = 1
//   mod = 10 ** 9 + 7

//   for (let i = 1; i <= n; i++) {
//       res *= isPrime(i) ? ++a : ++b
//       res = res % mod
//   }

//   return res

//   function isPrime (num) {
//       s = Math.sqrt(num)

//       for (let i = 2; i <= s; i++) {
//           if (num % i == 0) return false
//       }

//       return num > 1
//   }

// };

console.log(numPrimeArrangements(n));
