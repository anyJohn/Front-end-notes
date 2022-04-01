/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param array int整型一维数组
 * @return int整型一维数组
 */
function reOrderArrayTwo(array) {
  let start = 0,
    end = array.length - 1;
  while (start < end) {
    while (array[start] % 2 === 1) start++;
    while (array[end] % 2 === 0) end--;
    if (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
    }
  }
  return array;
}
module.exports = {
  reOrderArrayTwo: reOrderArrayTwo,
};
