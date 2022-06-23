/**
 * 双O(n)解法
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
function merge(A, m, B, n) {
  // write code here
  let arr = [];
  while (A.length && B.length) {
    if (A[0] < B[0]) {
      arr.push(A.shift());
    } else {
      arr.push(B.shift());
    }
  }
  arr = [...arr, ...A, ...B];
  for (let i = 0; i < arr.length; i++) {
    A[i] = arr[i];
  }
}

/**
 * 单O(n)解法
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
function merge(A, m, B, n) {
  // write code here
  let aIndex = m - 1;
  let bIndex = n - 1;
  let tail = m + n - 1;
  while (aIndex >= 0 && bIndex >= 0) {
    if (A[aIndex] < B[bIndex]) {
      A[tail] = B[bIndex];
      tail--;
      bIndex--;
    } else {
      A[tail] = A[aIndex];
      tail--;
      aIndex--;
    }
  }
  if (bIndex >= 0) {
    for (let i = bIndex; i >= 0; i--) {
      A[tail] = B[i];
      tail--;
    }
  }
}
module.exports = {
  merge: merge,
};
