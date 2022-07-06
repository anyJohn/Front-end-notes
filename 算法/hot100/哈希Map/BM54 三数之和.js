/**
 * 单层循环内使用双指针做，事件复杂度
 * @param num int整型一维数组
 * @return int整型二维数组
 */
function threeSum(num) {
  // write code here
  const result = [];
  num.sort((a, b) => a - b);
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) return result;
    if (i && num[i] === num[i - 1]) continue;
    let left = i + 1;
    let right = num.length - 1;
    while (left < right) {
      let sum = num[i] + num[left] + num[right];
      if (sum === 0) {
        result.push([num[i], num[left], num[right]]);
        left++;
        right--;
        while (num[left] === num[left - 1]) left++;
        while (num[right] === num[right + 1]) right--;
      }
      if (sum > 0) right--;
      if (sum < 0) left++;
    }
  }
  return result;
}
module.exports = {
  threeSum: threeSum,
};
