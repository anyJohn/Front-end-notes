// 循环解法，时间空间复杂度O(√n)
function FindContinuousSequence(sum) {
  // write code here
  const result = [];
  for (let i = 1; i < sum; i++) {
    let temp = i;
    let tempSum = i;
    let stack = [];
    stack.push(i);
    while (tempSum < sum) {
      temp++;
      tempSum += temp;
      stack.push(temp);
      if (tempSum === sum) {
        result.push(stack);
      }
    }
  }
  return result;
}
module.exports = {
  FindContinuousSequence: FindContinuousSequence,
};
// 双指针做法，时间复杂度O(n),空间复杂度O(√n)
function FindContinuousSequence(sum)
{
    // write code here
    const result = [];
    let head = 1;
    let tail = 2;
    let tempSum = 0;
    while(head<sum) {
        tempSum = (head+tail)*(tail-head+1)/2;
        if(tempSum===sum) {
            let tempArr = [];
            for(let i = head; i<=tail;i++) {
                tempArr.push(i);
            }
            result.push(tempArr)
            head++
        } else if(tempSum<sum) {
            tail++
        } else {
            head++
        }
    }
    return result;
}
module.exports = {
    FindContinuousSequence : FindContinuousSequence
};