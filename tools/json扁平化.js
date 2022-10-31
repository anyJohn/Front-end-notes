const jsonValue = {};

const flatten = (data) => {
  const result = {};
  const isEmpty = (x) => Object.keys(x).length === 0;
  const recurse = (cur, prop) => {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      const length = cur.length;
      for (let i = 0; i < length; i++) {
        recurse(cur[i], `${prop}[${i}]`);
      }
      if (length === 0) {
        result[prop] = [];
      }
    } else {
      if (!isEmpty(cur)) {
        Object.keys(cur).forEach((key) =>
          recurse(cur[key], prop ? `${prop}_${key}` : key)
        );
      } else {
        result[prop] = {};
      }
    }
  };
  recurse(data, "");
  return result;
};
const result = flatten(jsonValue);
console.log(result);
