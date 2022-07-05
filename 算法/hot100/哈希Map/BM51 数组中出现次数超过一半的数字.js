function MoreThanHalfNum_Solution(numbers) {
  // write code here
  if (numbers.length === 1) return numbers[0];
  let count = 0;
  let cur = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (count === 0) cur = numbers[i];
    if (cur === numbers[i]) {
      count++;
    } else {
      count--;
    }
  }
  return cur;
}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
