function FirstNotRepeatingChar(str) {
  // write code here
  if (!str.length) return -1;
  const maps = {};
  for (const char of str) {
    if (maps[char] === undefined) {
      maps[char] = 0;
    }
    maps[char]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (maps[str[i]] === 1) return i;
  }
  return -1;
}
module.exports = {
  FirstNotRepeatingChar: FirstNotRepeatingChar,
};
