function minNumberInRotateArray(rotateArray) {
  // write code here
  let left = 0;
  let right = rotateArray.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (rotateArray[mid] > rotateArray[right]) {
      left = mid + 1;
    } else if (rotateArray[mid] < rotateArray[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return rotateArray[left];
}
module.exports = {
  minNumberInRotateArray: minNumberInRotateArray,
};
