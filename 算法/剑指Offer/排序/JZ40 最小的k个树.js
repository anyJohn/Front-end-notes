function GetLeastNumbers_Solution(input, k) {
  // write code here
  const result = [];
  if (k === 0) return result;
  input.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < k; i++) {
    result.push(input.shift());
  }
  return result;
}
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
};
