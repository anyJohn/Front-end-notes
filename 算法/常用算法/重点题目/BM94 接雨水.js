/**
 * 双指针贪心法，从两边开始，找到最短的一条边，填充雨水
 * max water
 * @param arr int整型一维数组 the array
 * @return long长整型
 */
function maxWater(arr) {
  // write code here
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;
  let maxLeft = 0;
  let maxRight = 0;
  while (left < right) {
    maxLeft = Math.max(arr[left], maxLeft);
    maxRight = Math.max(arr[right], maxRight);
    if (maxLeft < maxRight) {
      sum += maxLeft - arr[left++];
    } else {
      sum += maxRight - arr[right--];
    }
  }
  return sum;
}
module.exports = {
  maxWater: maxWater,
};
