const dataStream = [];
function Insert(num) {
  // write code here
  // 一个插入排序,用堆时间复杂度会更低，但是js没有堆数据结构，需要自己构造
  let i = 0;
  while (dataStream[i] < num) i++;
  dataStream.splice(i, 0, num); // 在i位置插入一个元素
}
function GetMedian() {
  // write code here
  let index = Math.floor(dataStream.length / 2);
  if (dataStream.length % 2) {
    return dataStream[index];
  } else {
    return (dataStream[index] + dataStream[index - 1]) / 2;
  }
}
module.exports = {
  Insert: Insert,
  GetMedian: GetMedian,
};
