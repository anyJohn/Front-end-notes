/**
 * 双指针。左右相同跳过，不同则左增加且赋值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || !nums.length) return nums.length;
  let left = 0;
  let right = 1;
  for (; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right];
    }
  }
  return ++left;
};
