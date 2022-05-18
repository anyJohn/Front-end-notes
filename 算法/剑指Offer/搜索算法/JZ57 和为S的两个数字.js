function FindNumbersWithSum(array, sum) {
  // write code here
  // 此题用双指针
  const result = [];
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let temp = array[left] + array[right];
    if (temp === sum) {
      result.push(array[left]);
      result.push(array[right]);
      break;
    } else if (temp > sum) {
      right--;
    } else {
      left++;
    }
  }
  return result;
}
module.exports = {
  FindNumbersWithSum: FindNumbersWithSum,
};
