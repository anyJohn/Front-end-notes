/**
 * 用两个栈来处理数字和计算符，做到了边遍历，
 * 边把计算符权重高的计算好，这样栈顶的计算符权重永远是最高的，
 * 就可以直接计算栈顶了
 *
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
const WEIGHTS = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};
function solve(s) {
  // write code here
  const nums = [];
  const opts = [];
  for (let i = 0; i < s.length; i++) {
    if (isNumber(s[i])) {
      let temp = 0;
      while (isNumber(s[i])) {
        temp = temp * 10 + parseInt(s[i]);
        i++;
      }
      i--;
      nums.push(temp);
    } else if (s[i] === '(') {
      opts.push(s[i]);
    } else if (s[i] === ')') {
      while (opts[opts.length - 1] !== '(') {
        calculate(nums, opts);
      }
      opts.pop();
    } else {
      if (!opts.length) {
        opts.push(s[i]);
      } else if (WEIGHTS[s[i]] > WEIGHTS[opts[opts.length - 1]]) {
        // 遇到高权重，就让他进入计算栈
        opts.push(s[i]);
      } else {
        // 遇到低权重，就把opts栈里目前的的计算，直到权重大于opts栈顶
        while (WEIGHTS[s[i]] <= WEIGHTS[opts[opts.length - 1]]) {
          calculate(nums, opts);
        }
        opts.push(s[i]);
      }
    }
  }
  // 计算栈里剩余的数
  while (opts.length) calculate(nums, opts);
  return nums[0];
}

// 计算，并把结果再push到数字栈中，供下次计算
function calculate(nums, opts) {
  let right = nums.pop();
  let left = nums.pop();
  let opt = opts.pop();
  switch (opt) {
    case '+':
      nums.push(left + right);
      break;
    case '-':
      nums.push(left - right);
      break;
    case '*':
      nums.push(left * right);
      break;
    case '/':
      nums.push(left / right);
      break;
  }
}
function isNumber(s) {
  return s <= '9' && s >= '0';
}
module.exports = {
  solve: solve,
};
