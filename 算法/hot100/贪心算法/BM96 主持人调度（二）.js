/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算成功举办活动需要多少名主持人
 * @param n int整型 有n个活动
 * @param startEnd int整型二维数组 startEnd[i][0]用于表示第i个活动的开始时间，startEnd[i][1]表示第i个活动的结束时间
 * @return int整型
 */
function minmumNumberOfHost(n, startEnd) {
  // write code here
  let start = [];
  let end = [];
  for (const item of startEnd) {
    start.push(item[0]);
    end.push(item[1]);
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let host = 0;
  for (let i = 0; i < n; i++) {
    if (start[i] >= end[0]) {
      end.shift();
    } else {
      host++;
    }
  }
  return host;
}
module.exports = {
  minmumNumberOfHost: minmumNumberOfHost,
};
