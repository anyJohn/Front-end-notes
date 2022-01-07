const example = {
  name: "jxd",
  birthday: 1998,
  info: {
    techStack: ["js", "vue", "css", "html", "nodejs"],
    career: {
      student: 0,
      fontEndEngineer: 1,
    },
  },
};

function deepClone(origin) {
  // 判断是否基本类型
  if (origin == undefined || typeof origin !== "object") {
    return origin;
  }
  // Date类型
  if (origin instanceof Date) {
    return new Date(origin);
  }
  // 正则类型
  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }
  // 根据原对象的构造函数构造目标，array、object
  const target = new origin.constructor();
  for (let item in origin) {
    // origin上是否该属性，排除原型链上的属性
    if (item.hasOwnProperty(item)) {
      // 递归
      target[item] = deepClone(origin[item]);
    }
  }
  return target;
}

const newObj = deepClone(example);
newObj.name = "jlf";
console.log(example, newObj);

function cloneDeep(val) {
  if (val === undefined || typeof val !== "object") {
    return val;
  }
  if (val instanceof Date) {
    return new Date(val);
  }
  if (val instanceof RegExp) {
    return new RegExp(val);
  }
  const result = new val.constructor();
  for (let key in val) {
    if (val.hasOwnProperty(key)) {
      result[key] = cloneDeep(val[key]);
    }
  }
  return result;
}
