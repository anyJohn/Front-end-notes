/**
 * 数组长度只有3，直接暴力模拟
 * ，即每轮取最大的两个
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  let s = 0;
  while (amount[0] || amount[1] || amount[2]) {
    s++;
    amount.sort((a, b) => b - a);
    if (amount[0] !== 0 && amount[1] !== 0) {
      amount[0]--;
      amount[1]--;
    } else {
      amount[0]--;
    }
  }
  return s;
};
