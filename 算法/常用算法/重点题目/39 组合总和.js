/**
 * 解答：一个数有两种状态，被选择了，和没被选择，所以做一个DFS回溯，
 * 判断每个数被选择和没被选择的两种情况.
 * 然后如果相加等于target了，就push到result数组中
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  dfs(0, target, [], candidates, result);
  return result;
};
function dfs(index, target, stack, array, result) {
  if (target === 0) {
    result.push([...stack]);
    return;
  }
  if (target < 0) return;
  if (index > array.length - 1) return;
  dfs(index + 1, target, [...stack], array, result);
  if (target >= 0 && target - array[index] >= 0) {
    dfs(index, target - array[index], [...stack, array[index]], array, result);
  }
}
