/**
 * 用到了归并排序的思想，
 * 在归并排序的过程中，一段一段地计算逆序对
 * 性能优化：splice -> slice
 * push、shift操作数组 -> 操作数组下标
 * 直接操作arr数组而不是用展开符
 * 性能可以提升4倍
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

// 优化版本的merge和mergeSort函数
function merge(left, right) {
  let arr = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      arr[k] = right[j];
      j++;
      k++;
      result += left.length - i;
      result %= MOD;
    } else {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
  while (i < left.length) {
    arr[k] = left[i];
    k++;
    i++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    k++;
    j++;
  }
  return arr;
}
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);
  return merge(mergeSort(left), mergeSort(right));
}
module.exports = {
  InversePairs: InversePairs,
};
