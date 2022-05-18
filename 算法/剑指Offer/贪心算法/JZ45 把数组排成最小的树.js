function PrintMinNumber(numbers) {
  // write code here
  numbers.sort((a, b) => {
    return a + '' + b - (b + '' + a);
  });
  return numbers.join('');
}
module.exports = {
  PrintMinNumber: PrintMinNumber,
};
