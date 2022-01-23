/**
 * 每个构造函数（constructor）都有一个原型对象（prototype），
 * 原型对象都包含一个执行构造函数的指针，而实例（instance）都包含一个指向原型对象的内部指针
 */
// 1.
function Person(name) {
  this.name = name;
}
let john = new Person("john");
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
console.log(john.constructor === Person.prototype.constructor); // true
/*
  实例的__proto__，等于构造函数的prototype
  构造函数的prototype的constructor指向构造函数
  - Person.prototype,对构造函数使用,指向原型对象
  - Object.getPrototype(john),是ES5中用来获取john实例的原型对象的标准方法
  - __proto__,是获取john实例的原型对象的非标准方法

  __proto__
  绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于Person.prototype中，
  实际上，它是来自于Object.prototype，与其说是一个属性，不如说是一个getter/setter，
  当时使用obj.__proto__时，可以立即成返回了Object.getPrototypeOf(obj)
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

// 4. null
console.log(Object.prototype.__proto__ === null); // true
/**
 * Object的原型对象的原型时null
 * 引用阮一峰的话来说，null表示没有对象，即此处不应该有值
 */

/**
 * 此继承非彼继承
 * 《你不知道的JavaScript》
 * 继承意味着复制操作，然而JavaScript默认并不会复制对象的属性，
 * 相反，JavaScript只是在两个对象之间创建一个关联，
 * 这样，一个对象就可以通过委托访问两一个对象的属性和函数，
 * 所以与其叫继承，委托的说法反而更准确
 */
