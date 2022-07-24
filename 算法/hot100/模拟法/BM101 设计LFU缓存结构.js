/**
 * lfu design
 * @param operators int整型二维数组 ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
class LFUCache {
  constructor(arg) {
    this.map = new Map();
    this.countMap = new Map();
    this.max = arg;
  }
  set(key, value) {
    if (this.map.has(key)) {
      // this.map.delete(key);
      let count = this.countMap.get(key);
      this.countMap.delete(key);
      this.countMap.set(key, count + 1);
    } else if (this.map.size === this.max) {
      let minKey = null;
      let minValue = Infinity;
      this.countMap.forEach((curValue, curKey) => {
        if (curValue < minValue) {
          minKey = curKey;
          minValue = curValue;
        }
      });
      this.countMap.delete(minKey);
      this.map.delete(minKey);
      this.countMap.set(key, 1);
    } else {
      this.countMap.set(key, 1);
    }
    this.map.set(key, value);
  }
  get(key) {
    if (this.map.has(key)) {
      let value = this.map.get(key);
      let count = this.countMap.get(key);
      this.countMap.delete(key);
      this.countMap.set(key, count + 1);
      return value;
    } else {
      return -1;
    }
  }
}
function LFU(operators, k) {
  // write code here
  let lfu = new LFUCache(k);
  let result = [];
  for (const item of operators) {
    let opt = item[0];
    let key = item[1];
    let value = item[2];
    if (opt === 1) {
      lfu.set(key, value);
    } else {
      result.push(lfu.get(key));
    }
  }
  return result;
}
module.exports = {
  LFU: LFU,
};
