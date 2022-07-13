function trans(s, n) {
  //write code here
  let arr = s.split(' ');
  arr.reverse();
  s = arr.join(' ');
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
      result += s[i].toLowerCase();
    } else {
      result += s[i].toUpperCase();
    }
  }
  return result;
}

module.exports = {
  trans: trans,
};
