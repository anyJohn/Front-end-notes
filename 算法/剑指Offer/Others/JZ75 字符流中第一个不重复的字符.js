let mp;
//Init module if you need
function Init() {
  mp = new Map(); // write code here
}
//Insert one char from stringstream
function Insert(ch) {
  // write code here
  let num = mp.get(ch);
  if (!num) {
    mp.set(ch, 1);
  } else {
    mp.set(ch, num + 1);
  }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
  // write code here
  for (let ch of mp.keys()) {
    if (mp.get(ch) === 1) {
      return ch;
    }
  }
  return '#';
}

module.exports = {
  Init: Init,
  Insert: Insert,
  FirstAppearingOnce: FirstAppearingOnce,
};
