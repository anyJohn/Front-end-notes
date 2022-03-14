function Permutation(str) {
  // write code here
  // 插空法或递归回溯
  if (!str.length) return [];
  if (str.length === 1) return [str];
  let result = [""];
  for (const char of str) {
    const temp = new Set();
    for (const item of result) {
      for (let j = item.length; j >= 0; j--) {
        temp.add(item.slice(0, j) + char + item.slice(j));
      }
    }
    result = [...temp];
  }
  return result;
}
module.exports = {
  Permutation: Permutation,
};
