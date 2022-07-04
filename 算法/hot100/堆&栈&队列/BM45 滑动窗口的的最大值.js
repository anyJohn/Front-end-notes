/**
 * 维护一个对应值递减的的双端队列，
 * 队列头部就是窗口最大值，那么窗口滑动时，
 * 把队列中小于该值的pop出去（因为窗口滑动时，之前的值不可能再是最大值了）
 * 
 * @param {*} num
 * @param {*} size
 * @returns
 */
function maxInWindows(num, size) {
  // write code here
  let result = [];
  const deque = [];
  for (let i = 0; i < size; i++) {
    while (deque.length && num[deque[deque.length - 1]] < num[i]) {
      deque.pop();
    }
    deque.push(i);
  }
  for (let i = size; i < num.length; i++) {
    result.push(num[deque[0]]);
    if (deque.length) {
      while (deque[0] < i - size + 1) deque.shift();
      while (num[deque[deque.length - 1]] < num[i]) deque.pop();
    }
    deque.push(i);
  }
  result.push(num[deque.shift()]);
  return result;
}
module.exports = {
  maxInWindows: maxInWindows,
};
