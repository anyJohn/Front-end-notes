function jumpFloorII(number) {
  // write code here
  if (number === 0 || number === 1) return 1;
  let index = 1;
  for (let i = 1; i < number; i++) {
    index *= 2;
  }
  return index;
}
module.exports = {
  jumpFloorII: jumpFloorII,
};
