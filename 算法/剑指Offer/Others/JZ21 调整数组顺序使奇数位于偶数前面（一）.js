/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function reOrderArray(array) {
  // write code here
  let arr1 = [];
  let arr2 = [];
  for (const item of array) {
    if (item === 0 || item % 2 === 0) {
      arr1.push(item);
    } else {
      arr2.push(item);
    }
  }
  return [...arr2, ...arr1];
}
module.exports = {
  reOrderArray: reOrderArray,
};
