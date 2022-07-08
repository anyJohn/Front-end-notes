/**
 * 这题有陷阱，以为需要进行合法性校验，但是不用
 * 只需要能闭合，就合法，因为只有一种括号，没有其他字符
 * 所以只需要猛猛排列组合即可
 * @param n int整型
 * @return string字符串一维数组
 */
function generateParenthesis(n) {
  // write code here
  if (n === 0) return [];
  if (n === 1) return ['()'];
  const result = [];
  const recursion = (left, right, str) => {
    if (left === n) {
      while (n - right !== 0) {
        str += ')';
        right++;
      }
      result.push(str);
      return;
    }
    if (left > right) {
      str += ')';
      recursion(left, right + 1, str);
      str = str.slice(0, str.length - 1);
    }
    str += '(';
    recursion(left + 1, right, str);
    str = str.slice(0, str.length - 1);
  };
  recursion(0, 0, '');
  return result;
}
module.exports = {
  generateParenthesis: generateParenthesis,
};
