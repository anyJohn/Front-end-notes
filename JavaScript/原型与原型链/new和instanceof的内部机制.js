// 1. new
// let p = new person()
function Person(name) {
  this.name = name;
}
function myNew(func, ...args) {
  // 创建一个基于构造函数原型的空对象
  let obj = Object.create(func.prototype);
  // 等同于
  /**
  let obj = {}
  obj.__proto__ = func.prototype
   */
  const foo = func.apply(obj, args);
  return foo instanceof Object ? foo : args;
}
let p = myNew(Person, "john");

// 2.instanceof
function O() {}
function F() {}

let obj = new O();
O.prototype = new F();
console.log(obj.__proto__.prototype.a);
console.log(obj instanceof O);
console.log(obj instanceof F);
console.log(O.prototype instanceof F);
console.log(obj === O.prototype);
console.log(O.prototype === F.prototype);
