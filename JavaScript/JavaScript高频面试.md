### 数据类型

- **基本数据类型**：Undefined、Null、Boolean、Number、String、Symbol、BigInt，保存在栈内存中。
- **引用类型**：Object、Array、Function、Date、RegExp。内置对象（Global、Math）等引用类型保存在堆内存中，栈内存存储变量标识符和存储地址

### 数据类型判断

- `typeof`，能够快速区分基本类型，缺点是复杂引用类型无法区分，都会返回`object`

```javascript
console.log(typeof {}); // object
console.log(typeof null); //object
```

- `instanceof`，只能区分引用类型，无法区分基本类型

```javascript
console.log("str" instanceof String); //false
console.log([] instanceof Array); //true
```

- `Object.prototype.toString.call()`，能够精准的判断数据类型，推荐封装后使用

```javascript
console.log(toString.call(1)); // [object Number]
console.log(toString.call([])); // [object Array]
console.log(toString.call(new Date())); // [object Date]
console.log(function () {}); // [object Function]
```

### var && let && const

`let`和`const`是 es6 创建变量的新增语法

1. `var`定义的变量，`没有块级概念，可以跨块访问`，不能跨函数访问。`let`定义的变量，只能在块级作用域中访问，不能跨块访问，也不能跨函数访问。`const`用来定义常量，使用时必须初始化（即必须赋值），只能在块作用域里访问，且不能修改。

2. `var`存在变量提升，可以`先声明，后访问`，`let`必须先声明后使用。
3. `var`允许在相同作用域内`重复声明同一变量`，而`let`、`const`不允许这一现象。
4. 在全局上下文中，基于`let`、`const`声明的全局变量和全局对象没有直接关系，而`var`声明的变量与全局对象有映射关系。
5. `let`、`const`暂时性死区，进行实例化时，作用域中使用`let/const`声明的变量会先在作用域中被创建出来，但此时还未进行词法绑定，所以不可访问，访问会抛出异常。因此从流程进入作用域创建变量，到变量可以调用这一段时间，称之为暂时性死区。（`var/function`声明前打印出来是`undefined`）

### 原型和原型链

- 每个构造函数（constructor），都会带一个`prototype`属性，这个属性指向函数的原型对象，并且这个属性是一个`Object`类型的值。
- 实例也会自带一个属性`__proto__`，指向
