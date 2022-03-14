function VerifySquenceOfBST(sequence) {
  // write code here
  if (!sequence.length) return false;
  const check = (seq, start, end) => {
    if (start >= end) return true;
    let root = seq[end];
    let index = 0;
    for (; index < end; index++) {
      if (seq[index] > root) break;
    }
    let foo = index;
    for (; foo < end; foo++) {
      if (seq[foo] < root) return false;
    }
    let left = true;
    let right = true;
    if (index > start) {
      left = check(seq, start, index - 1);
    }
    if (index < end) {
      right = check(seq, index, end - 1);
    }
    return left && right;
  };
  return check(sequence, 0, sequence.length - 1);
}
module.exports = {
  VerifySquenceOfBST: VerifySquenceOfBST,
};
