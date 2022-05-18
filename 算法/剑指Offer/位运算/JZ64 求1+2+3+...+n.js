// 要求不用if，用&&结束递归
let res = 0;
function Sum_Solution(n) {
  // write code here
  n > 0 && Sum_Solution(n - 1);
  res += n;
  return res;
}
module.exports = {
  Sum_Solution: Sum_Solution,
};
