// function multiply(array) {
//   // write code here
//   // 暴力解
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let temp = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         temp *= array[j];
//       }
//     }
//     result.push(temp);
//   }
//   return result;
// }
// module.exports = {
//   multiply: multiply,
// };
function multiply(array) {
  // write code here
  // 前后构建乘积数组
  let result = [];
  result[0] = 1;
  for (let i = 1; i < array.length; i++) {
    result[i] = result[i - 1] * array[i - 1];
  }
  let temp = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= array[i];
  }
  return result;
}
module.exports = {
  multiply: multiply,
};
