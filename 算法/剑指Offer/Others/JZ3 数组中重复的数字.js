/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param numbers int整型一维数组
 * @return int整型
 */
function duplicate(numbers) {
  // write code here
  if (!numbers.length) return -1;
  const sets = new Set();
  let count = 0;
  for (const number of numbers) {
    if (number < 0 || number > numbers.length - 1) return -1;
    sets.add(number);
    count++;
    if (sets.size !== count) return number;
  }
}
module.exports = {
  duplicate: duplicate,
};
