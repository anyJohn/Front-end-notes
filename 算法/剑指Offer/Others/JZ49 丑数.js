function GetUglyNumber_Solution(index) {
  // write code here
  // 2^x3^y5^z的三指针解法
  if (index <= 6) return index;
  const res = [];
  let point2 = 0,
    point3 = 0,
    point5 = 0;
  res[0] = 1;
  for (let i = 1; i < index; i++) {
    res[i] = Math.min(res[point2] * 2, res[point3] * 3, res[point5] * 5);
    if (res[i] === res[point2] * 2) {
      point2++;
    }
    if (res[i] === res[point3] * 3) {
      point3++;
    }
    if (res[i] === res[point5] * 5) {
      point5++;
    }
  }
  return res[index - 1];
}
module.exports = {
  GetUglyNumber_Solution: GetUglyNumber_Solution,
};
