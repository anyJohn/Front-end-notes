function GetLeastNumbers_Solution(input, k) {
  // write code here
  let result = [];
  input.sort((a, b) => a - b);
  while (k--) {
    result.push(input.shift());
  }
  return result;
}
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
};
