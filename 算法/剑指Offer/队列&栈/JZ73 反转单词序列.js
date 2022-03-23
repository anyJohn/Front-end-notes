function ReverseSentence(str) {
  // write code here
  if (!str) return str;
  let arr = str.split(" ");
  return arr.reverse().join(" ");
}
module.exports = {
  ReverseSentence: ReverseSentence,
};
