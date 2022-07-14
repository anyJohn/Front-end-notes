/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 * 首先按照开头进行排序，
 * 然后依次判断是否是重叠的即可
 * @param intervals Interval类一维数组
 * @return Interval类一维数组
 */
function merge(intervals) {
  // write code here
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a.start - b.start);
  let fast = 1;
  let result = [];
  let pre = intervals[0];
  while (fast < intervals.length) {
    let preMin = pre.start;
    let preMax = pre.end;
    let fastMin = intervals[fast].start;
    let fastMax = intervals[fast].end;
    if (fastMin > preMax) {
      result.push(pre);
      pre = intervals[fast];
    } else {
      pre = new Interval(pre.start, Math.max(pre.end, fastMax));
    }
    if (fast === intervals.length - 1) {
      result.push(pre);
    }
    fast++;
  }
  return result;
}
module.exports = {
  merge: merge,
};
