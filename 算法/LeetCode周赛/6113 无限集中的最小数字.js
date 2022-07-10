/**
 * 因为无限集是无限的，所以不能直接操作无限集合
 * 用一个set去装我们废弃出去的数字
 * 如果要最小值时，我们只需要给出set中不存在的最小值即可
 */

var SmallestInfiniteSet = function () {
  this.set = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  let n = Infinity;
  for (let i = 1; i < n; i++) {
    if (!this.set.has(i)) {
      this.set.add(i);
      return i;
    }
  }
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.set.has(num)) {
    this.set.delete(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
