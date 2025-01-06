// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

let address = "255.100.50.0";
// Output: "255[.]100[.]50[.]0"

// Constraints:

// The given address is a valid IPv4 address.

var defangIPaddr = function (address) {
  address = address.split("");
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      address.splice(i, 1, "[.]");
    }
  }
  return address.join("");
};

console.log(defangIPaddr(address));
