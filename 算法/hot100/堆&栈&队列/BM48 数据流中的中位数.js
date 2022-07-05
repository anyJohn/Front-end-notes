const dataStream = [];
function Insert(num) {
  // write code here
  let i = 0;
  // 在插入数据的时候做一个插入排序
  while (num > dataStream[i]) i++;
  dataStream.splice(i, 0, num);
}
function GetMedian() {
  // write code here
  let mid = Math.floor((dataStream.length - 1) / 2);
  if (dataStream.length % 2) {
    return dataStream[mid];
  } else {
    return (dataStream[mid] + dataStream[mid + 1]) / 2;
  }
}
module.exports = {
  Insert: Insert,
  GetMedian: GetMedian,
};
