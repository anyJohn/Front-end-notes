/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param n int整型 最大位数
 * @return int整型一维数组
 */
function printNumbers(n) {
  // write code here
  const arr = [];
  let max = 10 ** n;
  for (let i = 1; i < max; i++) {
    arr.push(i);
  }
  return arr;
}
module.exports = {
  printNumbers: printNumbers,
};
