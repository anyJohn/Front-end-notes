/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
function getLongestPalindrome(A) {
  // write code here
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    let left = 0;
    let right = 0;
    let count = 0;
    let temp1 = 0;
    let temp2 = 0;
    // 可能是偶数
    if (A[i] === A[i + 1]) {
      left = i - 1;
      right = i + 2;
      count = 2;
      while (A[left] === A[right] && left >= 0 && right < A.length) {
        count += 2;
        left--;
        right++;
      }
      temp1 = count;
    }
    // 可能是奇数
    left = i - 1;
    right = i + 1;
    count = 1;
    while (A[left] === A[right] && left >= 0 && right < A.length) {
      count += 2;
      left--;
      right++;
    }
    temp2 = count;
    // 取奇数偶数和当前记录的最大值三者中的的最大值
    max = Math.max(temp1, temp2, max);
  }
  return max;
}
module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};
