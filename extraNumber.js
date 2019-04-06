// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?
//
// Example
//
// For a = 2, b = 7, and c = 2, the output should be
// extraNumber(a, b, c) = 7.
//
// The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

function extraNumber(a, b, c) {
    return a === b ? c : a === c ? b : b === c ? a : 0
}

// if a === b return c, if a === c return b, & if b & c === return a

// alternative solution with bitwise operator
// a: 3, b: 2, c: 2  // output: 3
//
// return (a^b)^c
//
// (00000011 XOR 00000010) XOR 00000010
// 00000001 XOR 00000010
// 00000011
