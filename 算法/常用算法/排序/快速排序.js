/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort(arr) {
  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift();
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat([pivot], quickSort(right));
  };
  return quickSort(arr);
}
module.exports = {
  MySort: MySort,
};
