/**
 * pick candy
 * @param arr int整型一维数组 the array
 * @return int整型
 */
// 9
function candy(arr) {
  // write code here
  let sum = 0;
  let candies = [];
  for (let i = 0; i < arr.length; i++) {
    let pre = arr[i - 1];
    if (arr[i] > pre) {
      candies[i] = candies[i - 1] + 1;
    } else {
      candies[i] = 1;
    }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let next = arr[i - 1];
    if (next > arr[i] && candies[i - 1] <= candies[i]) {
      candies[i - 1] = candies[i] + 1;
    }
  }
  for (const item of candies) {
    sum += item;
  }
  return sum;
}
module.exports = {
  candy: candy,
};
