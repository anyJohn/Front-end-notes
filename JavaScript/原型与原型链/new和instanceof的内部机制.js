// 1. new
// let p = new person()
function Person(name) {
  this.name = name;
}
function myNew(func, ...args) {
  let obj = {};
  // let proto = Object.getPrototypeOf(obj);
  // proto = Person.prototype;
  obj.__proto__ = Person.prototype;
  /* 上面两行也可以写成
      Object.create(Person.prototype)
  */
  const foo = func.apply(obj, args);
  return foo instanceof Object ? foo : args;
}
let p = myNew(Person, "john");
console.log(p.__proto__);

function O() {}
function F() {}

let obj = new O();
O.prototype = new F();
console.log(obj instanceof O);
console.log(obj instanceof F);
console.log(O.prototype instanceof F);
console.log(obj === O.prototype);
console.log(O.prototype === F.prototype);
