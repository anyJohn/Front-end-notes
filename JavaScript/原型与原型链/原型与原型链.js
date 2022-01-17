// 1.
function Person(name) {
  this.name = name;
}
let john = new Person("john");
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
/*
  实例的__proto__（原型），等于构造函数的prototype（原型对象）
  - Person.prototype,对构造函数使用,原型
  - Object.getPrototype(john),是ES5中用来获取john的原型对象的标准方法
  - __proto__,是获取john对象原型对象的非标准方法
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

// 3.
function Person1(name) {
  this.name = name;
  return name;
}
let Joe = new Person1("Joe");
console.log(Joe); // {name:"Joe"}

function Person2(name) {
  this.name = name;
  return {};
}
let Doe = new Person2("Doe");
console.log(Doe); // {}
/*
  构造函数不需要显式返回值。使用new来创建对象（或调用构造函数时）时，如果return的非对象类型（数字、字符串、布尔类型）会忽略，如果对象类型会返回该对象（虽然typeof null 是object，但是返回也会被忽略）
*/
