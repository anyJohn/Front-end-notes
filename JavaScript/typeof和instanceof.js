/*
  在JavaScript中，判断一个变量的类型常常会使用typeof运算符，但是在判定引用类型时会出现一个问题，无论是什么类型的对象，它都会返回“object”
  instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的prototype属性。即检测constructor.prototype是否存在于参数object的原型链上。
*/
let timer = new Date();
console.log(typeof timer);
console.log(timer instanceof Date);

function Person(name) {
  this.name = name;
}
function Student(number) {
  this.number = number;
}

Student.prototype = Person.prototype;
Person.prototype.feature = "Walk upright";
Student.prototype.constructor = Student;
let john = new Student("1024");
console.log(john);
console.log(john.feature);
console.log(john instanceof Person);
