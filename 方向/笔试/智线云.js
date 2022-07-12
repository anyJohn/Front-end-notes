/**
 * 第一题：冒泡排序
 * 时间复杂度O(n^2)的排序，通过交换不符合条件的两个数组项，
 * 像冒泡一样排序，加入了isSorted()函数来判断是否是已经排序好的数组
 * 然后发现可以进行优化，在冒泡遍历中直接判断是否是排好序的数组
 */
function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // if (isSorted(arr)) {
  //   return arr;
  // }
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // flag 变量，用于此次循环判断是否交换过
    let flag = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else if (!flag && i === 0 && j === arr.length - 2) {
        // 第一次排序结束，没有交换位置，那么是已经排好序的数组了
        return arr;
      }
    }
  }
  return arr;
}
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log('....1....');
console.log('sorted', sort([1, 2, 3, 4, 5, 6]));
console.log('unsorted', sort([3, 2, 1, 4, 6, 5]));

/**
 * 给定⼀组正整数数组M，找出M数组中N项和为给定数S。如果有多对N项数字的和都等于S，则
 * 输出N个数的乘积最⼩的哪⼀项，没有则返回空；
 * 解答：一个数有两种状态，被选择了，和没被选择，所以做一个DFS回溯，判断每个数被选择和没被选择的两种情况.
 * 然后在DFS过程中记录下来最大的乘积那一组
 */
function min(M, S) {
  if (!M.length) return null;
  let result = [];
  let max = 0;
  /**
   * @param {下标} index
   * @param {记录当前存下的数} stack
   * @param {目标剩余值} target
   * @returns
   */
  const dfs = (index, stack, target) => {
    if (index === M.length) return;
    if (target === 0) {
      let temp = 1;
      let size = stack.length;
      while (size--) {
        temp *= stack[size];
      }
      if (temp > max) {
        max = temp;
        result = [...stack];
      }
      return;
    }
    // 跳过这个数，即没被选择
    dfs(index + 1, [...stack], target);
    // 选择了这个数
    if (target - M[index] >= 0) {
      let temp = [...stack, M[index]];
      dfs(index + 1, temp, target - M[index]);
    }
  };
  dfs(0, [], S);
  return result;
}
console.log('....2....');
console.log(min([1, 2, 3, 4, 5], 7));
console.log(min([3, 2, 1, 4, 6, 5], 9));

/**
 * 兔子生育问题
 * 解答：用一个变量表示已经成熟的兔子，一个队列用来存发育中的兔子的月数，
 * 每个月遍历一次，发育中的兔子月份 + 1，
 * 成熟的兔子生下0月数的小兔子，push到growQueue中，
 * 检查发育中的小兔子有没有成熟的，如果成熟了就出列，成年兔子 + 1
 * @param {成熟时间} adultTime
 * @param {月数} month
 * @returns
 */
function rabbit(adultTime, month) {
  if (month < adultTime) return 1;
  let adultSize = 1;
  let growQueue = [];
  for (let i = adultTime; i <= month; i++) {
    for (let j = 0; j < growQueue.length; j++) {
      growQueue[j]++;
    }
    let temp = adultSize;
    while (temp--) {
      growQueue.push(0);
    }
    while (growQueue[0] === 4) {
      growQueue.shift();
      adultSize++;
    }
  }
  return adultSize + growQueue.length;
}
console.log('....3....');
console.log('4个月成熟，10个月数量', rabbit(4, 10));
console.log('5个月成熟，24个月数量', rabbit(5, 24));

/**
 * 居中格式字母数组
 * 解答：首先定义一个str变量来记录字符串，依次遍历words数组，
 * 如果现有字符串加上当前遍历值小于L，那么该遍历值在该行，追加到str中
 * 同时加一个 % 符号来做单词之间的区分
 * 这样就得到一个以行来区分的result数组
 * 遍历result数组，对每行进行格式化操作，在最中间单词的两边追加空格
 * 拼接到formatResult数组，返回结果
 * @param {*} words
 * @param {*} L
 */
function format(words, L) {
  let result = [];
  let formatResult = [];
  let str = words[0];
  for (let i = 1; i < words.length; i++) {
    let item = words[i];
    if (str.length < L && str.length + item.length < L) {
      if (str === '') {
        str += item;
      } else {
        str += `%${item}`;
      }
    } else {
      result.push(str);
      str = item;
      // 如果遍历已经结束了，那么把最后的单词push进去
      if (i === words.length - 1) {
        result.push(str);
      }
    }
  }
  for (const item of result) {
    let temp = item.split('%');
    let strSize = item.length - temp.length;
    let mid = Math.floor((temp.length - 1) / 2);
    while (strSize < L) {
      temp[mid] = ` ${temp[mid]} `;
      strSize += 2;
    }
    if (strSize > L) {
      temp[mid] = temp[mid].slice(0, temp[mid].length - 1);
    }
    formatResult.push(temp.join(''));
  }
  return formatResult;
}
const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
console.log('....4....');
console.log(format(words, 16));
