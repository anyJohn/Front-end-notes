function jumpFloor(number) {
  // write code here
  const maps = new Map();
  const recursion = (n) => {
    if (maps.has(n)) return maps.get(n);
    if (n === 1) return 1;
    if (n === 2) return 2;
    maps.set(n, recursion(n - 1) + recursion(n - 2));
    return maps.get(n);
  };
  return recursion(number);
}
module.exports = {
  jumpFloor: jumpFloor,
};
