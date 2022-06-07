// 优化解法，空间复杂度O(n)
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function FindGreatestSumOfSubArray(array) {
  // write code here
  let preDp = array[0];
  let dp = 0;
  let maxsum = array[0];
  let head = 0,
    tail = 0;
  let resultHead = 0,
    resultTail = 0;
  for (let i = 1; i < array.length; i++) {
    tail++;
    dp = Math.max(preDp + array[i], array[i]);
    if (preDp + array[i] < array[i]) {
      head = tail;
    }
    if (
      dp > maxsum ||
      (dp === maxsum && tail - head > resultTail - resultHead)
    ) {
      maxsum = dp;
      resultHead = head;
      resultTail = tail;
    }
    preDp = dp;
  }
  let result = [];
  for (let i = resultHead, j = 0; i <= resultTail; i++, j++) {
    result[j] = array[i];
  }
  return result;
}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
};

// 双O(n)解法
// /**
//  * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
//  *
//  *
//  * @param array int整型一维数组
//  * @return int整型一维数组
//  */
// function FindGreatestSumOfSubArray(array) {
//   // write code here
//   let head = 0,
//     tail = 0;
//   let resultHead = 0,
//     resultTail = 0;
//   let dp = [];
//   dp.push(array[0]);
//   let maxSum = dp[0];
//   for (let i = 1; i < array.length; i++) {
//     tail++;
//     dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
//     if (dp[i - 1] + array[i] < array[i]) {
//       head = tail;
//     }
//     if (
//       dp[i] > maxSum ||
//       (dp[i] === maxSum && tail - head > resultTail - resultHead)
//     ) {
//       maxSum = dp[i];
//       resultHead = head;
//       resultTail = tail;
//     }
//   }
//   let result = [];
//   for (let i = resultHead, j = 0; i <= resultTail; i++, j++) {
//     result[j] = array[i];
//   }
//   return result;
// }
// module.exports = {
//   FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
// };
