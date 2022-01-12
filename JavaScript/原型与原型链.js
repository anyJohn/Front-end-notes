// 1.
function Person(name) {
  this.name = name;
}
let jxd = new Person("jxd");
console.log(jxd.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); //true
/*
  实例的__proto__（原型），等于构造函数的prototype（原型对象）
*/

// 2.
let foo = {};
let func = function () {};
Object.prototype.a = "value a";
Function.prototype.b = "value b";
console.log(foo.a); // value a
console.log(foo.b); // undefined
console.log(func.a); // value a
console.log(func.b); // value b
/*
  寻找一条属性时，在此对象内部找不到，会从他原型中查找，直到搜索完所有原型，这就是原型链
*/
