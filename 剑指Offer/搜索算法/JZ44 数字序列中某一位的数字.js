/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 */
function findNthDigit(n) {
  // write code here
  let digitCount = 1,
    bottom = 0,
    top = 10;
  while (n > (top - bottom) * digitCount) {
    n = n - (top - bottom) * digitCount;
    digitCount++;
    bottom = top;
    top = top * 10;
  }
  let num = Math.floor(n / digitCount) + bottom;
  let index = n % digitCount;
  return num.toString()[index];
}
module.exports = {
  findNthDigit: findNthDigit,
};
