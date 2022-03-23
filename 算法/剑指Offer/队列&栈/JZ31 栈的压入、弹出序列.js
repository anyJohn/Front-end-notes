function IsPopOrder(pushV, popV) {
  // write code here
  let size = 0,
    j = 0;
  for (const item of pushV) {
    pushV[size] = item;
    while (size >= 0 && pushV[size] === popV[j]) {
      size--;
      j++;
    }
    size++;
  }
  return size === 0;
}
module.exports = {
  IsPopOrder: IsPopOrder,
};
