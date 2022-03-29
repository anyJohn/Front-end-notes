function IsContinuous(numbers) {
  // write code here
  numbers.sort();
  let zeroCount = 0;
  numbers.push(numbers[numbers.length - 1] + 1);
  for (let i = 0, j = 1; i < numbers.length; i++, j++) {
    if (numbers[i] === 0) {
      zeroCount++;
    } else {
      if (numbers[j] === numbers[i] + 1) {
        continue;
      } else {
        if (
          zeroCount < numbers[j] - numbers[i] - 1 ||
          numbers[j] === numbers[i]
        ) {
          return false;
        } else {
          zeroCount -= numbers[j] - numbers[i] - 1;
        }
      }
    }
  }
  return true;
}
module.exports = {
  IsContinuous: IsContinuous,
};
