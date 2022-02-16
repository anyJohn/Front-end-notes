function maxInWindows(num, size) {
  // write code here
  if (num.length == 0 || size < 1 || num.length < size) return [];
  let fast = 0;
  let slow = 0;
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (fast - slow === size - 1) {
      let tempArr = num.slice(slow, fast + 1);
      let max = null;
      for (const val of tempArr) {
        if (max === null) max = val;
        max = Math.max(val, max);
      }
      result.push(max);
      slow++;
    }
    fast++;
  }
  return result;
}
module.exports = {
  maxInWindows: maxInWindows,
};
