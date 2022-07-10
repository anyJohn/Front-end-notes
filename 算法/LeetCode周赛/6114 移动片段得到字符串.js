/**
 * 首先去除_之后的LR的顺序必须是相同的。
 * 然后一个一个去遍历L和R
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < start.length; i++) {
    if (start[i] !== '_') {
      str1 += start[i];
    }
    if (target[i] !== '_') {
      str2 += target[i];
    }
  }
  if (str1 !== str2) return false;
  let index = 0;
  for (let i = 0; i < start.length; i++) {
    let cur = start[i];
    if (cur !== '_') {
      for (let j = index; j < target.length; j++) {
        let targetCur = target[j];
        if (targetCur === '_') {
          continue;
        }
        if (targetCur !== cur) {
          return false;
        } else {
          if (cur === 'L' && i < j) {
            console.log('bbb');
            return false;
          }
          if (cur === 'R' && i > j) {
            console.log('ccc');
            return false;
          }
        }
        index = j + 1;
        break;
      }
    }
  }
  return true;
};
