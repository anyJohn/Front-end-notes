function Add(num1, num2) {
  // write code here
  /*
  ---位运算---
    转化成二进制，对二进制进行相加？NO对其进行& ^  操作
    ^异或操作：相当于无进位求和 （不同为1 相同为0）  1^1=0 1^0=1 0^0=0
    &与操作：相当于求每位的进位数 都是1才是1 1&1=0 1&0=0 0&0=0
    add(a^b, (a&b) << 1)
    每次无进位求 + 每次得到的进位数（进位数要左移一位 <<1）------我们需要不断重复这个过程，直到进位数为0为止；
  */
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  return Add(num1 ^ num2, (num1 & num2) << 1);
}
module.exports = {
  Add: Add,
};
