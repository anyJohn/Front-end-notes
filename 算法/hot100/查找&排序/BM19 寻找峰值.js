/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function findPeakElement(nums) {
  // write code here
  if (nums.length < 2) return 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
module.exports = {
  findPeakElement: findPeakElement,
};
