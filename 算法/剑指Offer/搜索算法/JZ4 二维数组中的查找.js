function Find(target, array) {
  // write code here
  if (!array.length) return false;
  let x_top = array[0].length - 1;
  let x_bottom = 0;
  let y_top = array.length - 1;
  let y_bottom = 0;
  while (y_bottom <= y_top && x_top >= x_bottom) {
    let corner = array[y_bottom][x_top];
    if (corner === target) return true;
    if (corner > target) {
      x_top--;
    }
    if (corner < target) {
      y_bottom++;
    }
  }
  return false;
}
module.exports = {
  Find: Find,
};
