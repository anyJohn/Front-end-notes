/**
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  // write code here
  let map = new Map();
  let max = 0;
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    if (map.has(arr[j])) {
      max = Math.max(j - i, max);
      i = Math.max(i, map.get(arr[j]) + 1);
      map.delete(arr[j]);
      map.set(arr[j], j);
    } else {
      map.set(arr[j], j);
    }
    if (j === arr.length - 1) {
      max = Math.max(j - i + 1, max);
    }
    j++;
  }
  return max;
}
module.exports = {
  maxLength: maxLength,
};
