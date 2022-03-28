function MoreThanHalfNum_Solution(numbers) {
  // write code here
  // 摩尔投票法
  let head = numbers[0];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (count === 0) {
      head = numbers[i];
      count = 0;
    }
    if (numbers[i] === head) {
      count++;
    } else {
      count--;
    }
  }
  return head;
}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
// 排序法
// function MoreThanHalfNum_Solution(numbers) {
//   // write code here
//   numbers.sort();
//   return numbers[Math.floor((numbers.length - 1) / 2)];
// }
// module.exports = {
//   MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
// };
