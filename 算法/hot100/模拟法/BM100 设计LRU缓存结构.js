/**
 * Map迭代器法，用map的迭代器去记录最远操作的key-value
 */

/**
 * @param {number} capacity
 */
var Solution = function (capacity) {
  // write code here
  this.max = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
Solution.prototype.get = function (key) {
  // write code here
  if (this.map.has(key)) {
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
Solution.prototype.set = function (key, value) {
  // write code here
  if (this.map.has(key)) {
    this.map.delete(key);
  } else if (this.map.size === this.max) {
    let last = this.map.keys().next();
    this.map.delete(last.value);
  }
  this.map.set(key, value);
};

module.exports = {
  Solution: Solution,
};

/**
 * Your Solution object will be instantiated and called as such:
 * var solution = new Solution(capacity)
 * var output = solution.get(key)
 * solution.set(key,value)
 */
