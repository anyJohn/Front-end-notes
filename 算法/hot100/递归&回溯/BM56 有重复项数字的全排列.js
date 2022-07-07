/**
 * 在BM55的基础上，
 * 增加了已经遍历过的下标数组。
 * 先排序，这样重复的就会在一起
 * 如果前后两个元素相等，然后之前的元素已经使用过
 * 那么就排除这种情况，continue
 * @param num int整型一维数组
 * @return int整型二维数组
 */
function permuteUnique(num) {
  // write code here
  const result = [];
  num.sort((a, b) => a - b);
  const recursion = (arr, indexArr) => {
    if (arr.length === num.length) return result.push([...arr]);
    for (let i = 0; i < num.length; i++) {
      if (i > 0 && num[i] === num[i - 1] && indexArr.indexOf(i - 1) !== -1) {
        continue;
      }
      if (indexArr.indexOf(i) === -1) {
        arr.push(num[i]);
        indexArr.push(i);
        recursion(arr, indexArr);
        arr.pop();
        indexArr.pop();
      }
    }
  };
  recursion([], []);
  return result;
}
module.exports = {
  permuteUnique: permuteUnique,
};
