// 6 kyu: Find the odd int
// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// my solution:

function findOdd(A) {
  let count = 0;
  for(let i = 0; i < A.length; i++) {
    for(let x = 0; x < A.length; x++) {
          if(A[i] == A[x]) {
            count++;
          }
        }
    if (count % 2 !== 0) {
        return A[i];
    }
  }
}
