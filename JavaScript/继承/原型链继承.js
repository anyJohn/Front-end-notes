// 1. 实现一个原型链继承
/**
 * ECMA-262把原型链定义为ECMAScript的主要继承方式。其基本思想就是通过原型继承多个引用类型的属性和方法。
 */
function Parent() {
  this.name = "John";
  this.names = ["John", "Doe"];
}
// 在原型上添加获取name属性的方法
Parent.prototype.getName = function () {
  return this.name;
};
function Child() {
  this.childName = "Johnny";
}
// 继承Parent
Child.prototype = new Parent();
const instance = new Child();
console.log(instance.getName()); // John
console.log(instance.childName); // Johnny
console.log(instance.__proto__.__proto__ === Parent.prototype); // true
/**
 * 这里实现继承的关键是Child没有使用默认原型，而是将其替换成了Parent的实例，
 * 这样Child的实例不仅能从Child的实例中继承属性和方法，还跟Parent的原型挂上了钩。
 */

// 2. 确定原型和实例的关系
/**
 * 使用instanceof操作符
 */
console.log(instance instanceof Object); // true
console.log(instance instanceof Parent); // true
console.log(instance instanceof Child); // true
/**
 * 使用isPrototypeOf()方法,原型链中的原型调用此方法
 */
console.log(Object.prototype.isPrototypeOf(instance)); // true
console.log(Parent.prototype.isPrototypeOf(instance)); // true

// 3. 缺点
/**
 * 一、引用类型的属性被所有实例共享
 */
const instance1 = new Child();
instance1.names.push("Dan");
console.log(...instance1.names); // John Doe Dan
const instance2 = new Child();
console.log(...instance2.names); // John Doe Dan
/**
 * 二、在创造Child的实例时，不能向Parent传参
 */
