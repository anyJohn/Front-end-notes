/**
 * 选举法，
 * @param {*} numbers
 * @returns
 */
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
/**
 * 哈希map法，双O(n)
 * @param {*} numbers
 * @returns
 */
function MoreThanHalfNum_Solution(numbers) {
  // write code here
  if (numbers.length === 1) return numbers[0];
  let map = {};
  for (const item of numbers) {
    if (map[item] === undefined) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  }
  for (const item of numbers) {
    if (map[item] > Math.floor(numbers.length / 2)) {
      return item;
    }
  }
  return 0;
}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
