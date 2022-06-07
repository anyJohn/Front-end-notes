// 约瑟夫环解法，O(n) O(1)的复杂度
function LastRemaining_Solution(n, m) {
  // write code here
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (m + result) % i;
  }
  return result;
}
module.exports = {
  LastRemaining_Solution: LastRemaining_Solution,
};

// 模拟法，双O(n)
function LastRemaining_Solution(n, m) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let index = m - 1;
  while (arr.length > 1) {
    if (index >= arr.length) {
      index = index % arr.length;
    }
    let temp = arr.splice(index, 1);
    index += m - 1;
  }
  return arr[0];
}
module.exports = {
  LastRemaining_Solution: LastRemaining_Solution,
};
