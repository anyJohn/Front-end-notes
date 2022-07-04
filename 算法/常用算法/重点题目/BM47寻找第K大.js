/**
 * 快排思想，找到基准点，然后进行交换。
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
function findKth(a, n, K) {
  return quickFind(a, 0, n - 1, K - 1);
}
function swap(arr, aIndex, bIndex) {
  let temp = arr[aIndex];
  arr[aIndex] = arr[bIndex];
  arr[bIndex] = temp;
}
function quickFind(arr, left, right, index) {
  if (right - left <= 0) return arr[left];
  let pivot = getPivot(arr, left, right);
  let i = left,
    j = right;
  while (i < j) {
    while (arr[i] >= pivot) i++;
    while (arr[j] <= pivot) j--;
    if (i >= j) {
      break;
    }
    swap(arr, i, j);
  }
  // i的左侧大于等于基准点，右侧与自己小于基准点
  swap(arr, i, right);
  if (i === index) {
    return arr[i];
  } else if (i < index) {
    return quickFind(arr, i + 1, right, index);
  } else {
    return quickFind(arr, left, i - 1, index);
  }
}
function getPivot(a, left, right) {
  let center = Math.floor((left + right) / 2);
  if (a[left] > a[center]) swap(a, left, center);
  if (a[left] > a[right]) swap(a, left, right);
  if (a[center] > a[right]) swap(a, center, right);
  // 需要注意，把基准点放在数组尾部，
  // 这样就相当于我们知道基准点的索引了。
  swap(a, center, right);
  return a[right];
}

module.exports = {
  findKth: findKth,
};
