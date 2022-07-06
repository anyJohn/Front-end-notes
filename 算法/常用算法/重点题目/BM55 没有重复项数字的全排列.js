/**
 * 分别以不同的数字开头，
 * 拼接结果数组中没有的数字
 * @param num int整型一维数组
 * @return int整型二维数组
 */
function permute(num) {
  // write code here
  const result = [];
  const recursion = (arr) => {
    if (arr.length === num.length) return result.push([...arr]);
    for (let i = 0; i < num.length; i++) {
      if (arr.indexOf(num[i]) === -1) {
        arr.push(num[i]);
        recursion(arr);
        arr.pop();
      }
    }
  };
  recursion([]);
  return result;
}
module.exports = {
  permute: permute,
};
