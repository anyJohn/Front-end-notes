function Find(target, array) {
  // write code here
  if (!array.length) return false;
  if (!array[0].length) return false;
  let left = 0;
  let buttom = array.length - 1;
  while (left < array[0].length && buttom >= 0) {
    let temp = array[buttom][left];
    if (temp === target) {
      return true;
    } else if (temp < target) {
      left++;
    } else {
      buttom--;
    }
  }
  return false;
}
module.exports = {
  Find: Find,
};
