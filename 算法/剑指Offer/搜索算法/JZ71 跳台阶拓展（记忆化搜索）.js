function jumpFloorII(number) {
  // write code here
  const maps = new Map();
  maps.set(1, 1);
  const recursion = (n) => {
    if (n === 1) return 1;
    for (let i = 0; i < n; i++) {
      if (!maps.has(n)) {
        maps.set(n, 2 * recursion(n - 1));
      } else {
        return maps.get(n);
      }
    }
  };
  recursion(number);
  return maps.get(number);
}
module.exports = {
  jumpFloorII: jumpFloorII,
};
