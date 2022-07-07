/**
 * 是BM55的进阶版本
 * 与BM56有重复数字的全排列相同
 * @param {*} str
 * @returns
 */
function Permutation(str) {
  // write code here
  if (!str.length) return str;
  let result = [];
  str = str.split('').sort().join('');
  const recursion = (s, dp) => {
    if (s.length === str.length) {
      return result.push(s);
    }
    for (let i = 0; i < str.length; i++) {
      if (i > 0 && str[i] === str[i - 1] && dp.indexOf(i - 1) !== -1) {
        continue;
      }
      if (dp.indexOf(i) === -1) {
        s += str[i];
        dp.push(i);
        recursion(s, dp);
        dp.pop();
        s = s.slice(0, s.length - 1);
      }
    }
  };
  recursion('', []);
  return result;
}
module.exports = {
  Permutation: Permutation,
};
