function NumberOf1(n) {
  // write code here
  let count = 0;
  while (n != 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
module.exports = {
  NumberOf1: NumberOf1,
};
