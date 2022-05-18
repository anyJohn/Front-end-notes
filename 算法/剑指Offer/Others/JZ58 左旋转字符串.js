// 时间复杂度和空间复杂度都为O(n)的解法
function LeftRotateString(str, n) {
  // write code here
  if (!str) return '';
  const arr = str.split('');
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr.join('');
}
// 时间复杂度O(n)和空间复杂度O(1)的解法
// module.exports = {
//   LeftRotateString: LeftRotateString,
// };
// function LeftRotateString(str, n)
// {
//     // write code here
//     if(!str) return '';
//     const mod = n % str.length;
//     const temp = str.slice(0,mod);
//     return str.slice(mod).concat(a)
// }
// module.exports = {
//     LeftRotateString : LeftRotateString
// };