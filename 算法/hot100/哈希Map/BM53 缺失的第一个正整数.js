/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function minNumberDisappeared(nums) {
  // write code here
  let map = new Map();
  for (const item of nums) {
    map.set(item, true);
  }
  let j = 1;
  while (map.has(j)) j++;
  return j;
}
module.exports = {
  minNumberDisappeared: minNumberDisappeared,
};
