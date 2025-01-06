// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// const s = "IceCreAm";

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

const s = "leetcode";

// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function (s) {
  debugger;
  //   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  //   let i = 0,
  //     j = s.length - 1;
  //   let temp = "";
  //   while (i < s.length && j > 0 && i < j) {
  //     // if (i == j) return s;
  //     if (vowels.includes(s[i]) && vowels.includes(s[j])) {
  //       temp = s[i];
  //       console.log(s.slice(0, i));
  //       console.log(s.slice(i, j));
  //       console.log(s.slice(j, s.length));
  //       s =
  //         s.slice(0, i) +
  //         s.slice(i, j).replace(s[i], s[j]) +
  //         s.slice(j, s.length).replace(s[j], temp);
  //       console.log(s);
  //       console.log(i, j);

  //       i++;
  //       j--;
  //     } else if (vowels.includes(s[i])) {
  //       j--;
  //     } else if (vowels.includes(s[j])) {
  //       i++;
  //     } else {
  //       i++;
  //       j--;
  //     }
  //   }
  //   return s;

  let word = s.split("");
  let start = 0;
  let end = s.length - 1;
  let vowels = "aeiouAEIOU";

  while (start < end) {
    while (start < end && !vowels.includes(word[start])) {
      start++;
    }
    while (start < end && !vowels.includes(word[end])) {
      end--;
    }

    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }

  return word.join("");
};

console.log(reverseVowels(s));
