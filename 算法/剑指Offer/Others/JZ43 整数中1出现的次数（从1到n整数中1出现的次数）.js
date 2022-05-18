function NumberOf1Between1AndN_Solution(n) {
  // write code here
  const arr = (n + '').split('');
  let base = 1;
  let res = 0;
  while (base <= n) {
    let cur = Math.floor((n / base) % 10);
    let pre = Math.floor(n / base / 10);
    let tail = n % base;
    if (cur === 1) {
      res += pre * base + tail + 1;
    } else if (cur === 0) {
      res += pre * base;
    } else {
      res += (pre + 1) * base;
    }
    base *= 10;
  }
  return res;
}
module.exports = {
  NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution,
};
