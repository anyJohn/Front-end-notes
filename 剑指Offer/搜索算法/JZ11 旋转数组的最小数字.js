function minNumberInRotateArray(rotateArray) {
  // write code here
  if (!rotateArray.length) return false;
  let right = rotateArray.length - 1;
  let left = 0;
  let last = rotateArray[right];
  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (rotateArray[mid] > last) {
      left = mid + 1;
    }
    if (rotateArray[mid] === last) {
      right--;
    }
    if (rotateArray[mid] < last) {
      right = mid;
    }
    last = rotateArray[right];
  }
  return last;
}
module.exports = {
  minNumberInRotateArray: minNumberInRotateArray,
};
