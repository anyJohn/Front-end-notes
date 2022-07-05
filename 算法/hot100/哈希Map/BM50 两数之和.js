/**
 * 利用map存储当前值和指针，
 * 在遍历中找到用map.has进行查找
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
function twoSum(numbers, target) {
  // write code here
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
}
module.exports = {
  twoSum: twoSum,
};
