/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort(arr) {
  const half = Math.floor(arr.length / 2);
  if (arr.length < 2) return arr;
  const left = arr.splice(0, half);
  return merge(MySort(left), MySort(arr));
}
function merge(left, right) {
  let arr = [];
  // 任意数组为空，退出循环
  while (left.length && right.length) {
    // 左右数组最小元素中选择出较小的元素
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}
module.exports = {
  MySort: MySort,
};
