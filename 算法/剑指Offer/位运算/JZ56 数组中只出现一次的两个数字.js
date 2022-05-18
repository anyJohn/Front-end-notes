/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param array int整型一维数组
 * @return int整型一维数组
 */
// set 做法，O(n)的时间复杂度和空间复杂度
function FindNumsAppearOnce(array) {
  // write code here
  const set = new Set();
  for (const item of array) {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  }
  return [...set].sort((a, b) => {
    return a - b;
  });
}
module.exports = {
  FindNumsAppearOnce: FindNumsAppearOnce,
};
