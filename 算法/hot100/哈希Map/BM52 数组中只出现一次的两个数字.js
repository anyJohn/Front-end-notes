/**
 * 用一个哈希表来存储次数
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function FindNumsAppearOnce(array) {
  // write code here
  let map = {};
  let result = [];
  for (const item of array) {
    if (map[item] === undefined) {
      map[item] = 1;
    } else {
      map[item]++;
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      result.push(key);
    }
  }
  return result.sort((a, b) => a - b);
}
module.exports = {
  FindNumsAppearOnce: FindNumsAppearOnce,
};
