/**
 * 用到了归并排序的思想，
 * 在归并排序的过程中，一段一段地计算逆序对
 */
const MOD = 1000000007;
let result = 0;
function merge(left, right) {
  let arr = [];
  let length = left.length;
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      arr.push(right.shift());
      result += left.length;
      result %= MOD;
    } else {
      arr.push(left.shift());
    }
  }
  return [...arr, ...left, ...right];
}
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let half = Math.floor(arr.length / 2);
  let left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}
function InversePairs(data) {
  // write code here
  if (data.length < 2) return result;
  mergeSort(data);
  return result;
}
module.exports = {
  InversePairs: InversePairs,
};
