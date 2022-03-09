function FindGreatestSumOfSubArray(array) {
  // write code here
  if (array.length === 1) return array[0];
  let max = array[0];
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    temp = Math.max(array[i], temp + array[i]);
    max = Math.max(max, temp);
  }
  return max;
}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
};
