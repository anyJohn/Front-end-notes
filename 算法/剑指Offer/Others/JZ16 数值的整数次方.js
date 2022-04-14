function Power(base, exponent) {
  // write code here
  if (exponent < 0) {
    base = 1 / base;
    exponent = -exponent;
  }
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
module.exports = {
  Power: Power,
};
