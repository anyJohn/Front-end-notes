function InversePairs(data) {
  // write code here
  if (data.length <= 1) return 0;
  let result = 0;
  const mod = 1000000007;
  function merge(left, right) {
    let arr = [];
    let length = left.length;
    let count = 0;
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        arr.push(right.shift());
        result += length - count;
        result %= mod;
      } else {
        arr.push(left.shift());
        count++;
      }
    }
    return [...arr, ...left, ...right];
  }
  function mergeSort(arr) {
    const half = Math.floor(arr.length / 2);
    if (arr.length <= 1) return arr;
    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
  }
  mergeSort(data);
  return result;
}
module.exports = {
  InversePairs: InversePairs,
};
