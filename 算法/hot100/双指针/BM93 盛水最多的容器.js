/**
 * 双指针贪心法，总是移动最短的一边
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param height int整型一维数组
 * @return int整型
 */
function maxArea(height) {
  // write code here
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left <= right) {
    max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
module.exports = {
  maxArea: maxArea,
};
