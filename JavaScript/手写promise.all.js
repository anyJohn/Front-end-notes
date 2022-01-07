// 迭代器版本
function all(iterable) {
  return new Promise((resolve, reject) => {
    // 迭代长度
    let index = 0;
    // 迭代次数计数
    let count = 0;
    // 是否有错
    let anErrorOccurred = false;
    // 使用for...of迭代遍历
    for (const promise of iterable) {
      // currentIndex迭代位置
      const currentIndex = index;
      // 计算迭代长度
      index++;
      // 执行promise
      promise.then(
        (val) => {
          // 如果有错误，提前返回
          if (anErrorOccurred) return;
          // 储存结果
          result[currentIndex] = val;
          count++;
          // 如果遍历结束，则返回成功执行值的数组
          if (count === result.length) {
            resolve(result);
          }
        },
        (err) => {
          // 如果有错误，就返回
          if (anErrorOccurred) return;
          // 存在错误，将错误判断变量置为true
          anErrorOccurred = true;
          reject(err);
        }
      );
    }
    if (index === 0) {
      resolve([]);
      return;
    }
    const result = new Array(index);
  });
}

// 数组版本
function arrAll(promises) {
  const result = new Array(promises.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((val, index) => {
      Promise.resolve(val).then(
        (val) => {
          count++;
          result[index] = val;
          if (count === promises.length) {
            resolve(val);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}

function all(iterable) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let index = 0;
    let oneErrorOccurred = false;
    for (const promise of iterable) {
      const currentIndex = index;
      index++;
      promise.then(
        (val) => {
          if (oneErrorOccurred) return;
          result[currentIndex] = val;
          if (++count === result.length) {
            resolve(result);
          }
        },
        (err) => {
          if (oneErrorOccurred) return;
          oneErrorOccurred = true;
          reject(err);
        }
      );
    }
    if (index === 0) {
      resolve([]);
      return;
    }
    const result = new Array(index);
  });
}
