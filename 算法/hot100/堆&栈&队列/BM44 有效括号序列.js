/**
 * 用栈模拟，注意审题
 * @param s string字符串
 * @return bool布尔型
 */
const START_MARKS = new Set(['(', '[', '{']);
const END_MARKS = new Set([')', ']', '}']);
function isValid(s) {
  // write code here
  let stack = [];
  for (const item of s) {
    let top = stack[stack.length - 1];
    if (isStartMark(item)) {
      stack.push(item);
    }
    if (isEndMark(item)) {
      if (item !== getCloseMark(top)) return false;
      stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
}
function isStartMark(s) {
  return START_MARKS.has(s);
}
function isEndMark(s) {
  return END_MARKS.has(s);
}
function getCloseMark(s) {
  switch (s) {
    case '(':
      return ')';
    case '{':
      return '}';
    case '[':
      return ']';
    default:
      return false;
  }
}
module.exports = {
  isValid: isValid,
};
