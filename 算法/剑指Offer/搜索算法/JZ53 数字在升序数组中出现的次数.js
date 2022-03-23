function GetNumberOfK(data, k) {
  // write code here
  if (!data.length) return 0;
  // 邪教做法
  // return data.filter((item)=>item === k).length
  let left = 0;
  let right = data.length - 1;
  // 获取下界
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (data[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  let left2 = 0;
  let right2 = data.length - 1;
  // 获取上界   
  while (left2 <= right2) {
    let mid = Math.floor((left2 + right2) / 2);
    if (data[mid] > k) {
      right2 = mid - 1;
    } else {
      left2 = mid + 1;
    }
  }
  return right2 - left + 1;
}
module.exports = {
  GetNumberOfK: GetNumberOfK,
};
