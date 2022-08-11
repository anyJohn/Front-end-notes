## 序言

> 设计模式的定义是: 在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。
> 通俗的说，就是给面向对象软件开发中的好的设计取个名字。

设计原则：

- 单一职责原则
- 最少知识原则
- 开放-封闭原则
- 依赖倒置原则

## The first part - 基础知识

### 面向对象的 JavaScript

#### 动态语言和鸭子类型

编程语言按照数据类型的大体分为两类：

- 静态类型语言
  - 编译时就能发现类型不匹配的错误
  - 编辑器友好
  - 编译器可以针对性优化，性能好
  - 在编写时，需要时刻关心类型，心智负担大，代码量大
- 动态类型语言
  - 代码量少，逻辑简单
  - 可读性好，专注于逻辑表达
  - 无法保证变量的类型，可能发生类型相关错误

鸭子类型（duck typing）：

动态类型语言的设计建立在鸭子类型上，即我们只关心对象行为，而不关心对象本身。“如果它走起路来像鸭子，叫起来也像鸭子，那么他就是鸭子”。

比如圣上需要建立一个内阁，需要 10 位学者来传达圣旨，可是王国找来找去也只有 9 位学者，那么如果有 1 只鸭子，也能够传达圣旨，那么就可以把它加入到我们的内阁里来。

```js
let scholar = {
  conveyOrders: function (arg) {
    console.log('奉天承运，皇帝诏曰', arg);
  },
  study: function () {
    console.log('科学研究');
  },
  type: 'scholar',
};
let duck = {
  conveyOrders: function (arg) {
    console.log('奉天承运，皇帝诏曰', arg);
  },
  duckCall: function () {
    console.log('嘎嘎嘎！');
  },
  type: 'duck',
};
const government = []; // 内阁
const joinGovernment = (anything) => {
  if (anything && typeof anything.conveyOrders === 'function') {
    government.push(anything);
    console.log(`欢迎${anything.type}加入内阁`);
  }
};
joinGovernment(scholar); // 欢迎scholar加入内阁
joinGovernment(duck); // 欢迎duck加入内阁
```

在动态类型语言的设计中，鸭子类型的概念至关重要，利用鸭子类型的思想，不必借助超类型的帮助，就能轻松地在动态类型语言中实现一个原则：面向接口变成，而非面向实现编程。

#### 多态

多态的含义是：  
同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。换句话说，给不同的对象，发送同一个消息的时候，这些对象会根据这个消息分别给出不同的结果。

> 比如圣上发出了圣旨——全天下的动物都叫起来，那么狗会汪汪叫，而鸭子会嘎嘎叫。这就蕴含了多态的思想。

多态的思想是：  
把“做什么”和“谁去做，怎样去做”区分开，也就是将“不变的事物”和“可能改变的事物”区分开。“不变的事物”隔离开，“变化的事物”封装起来，这就给予了我们拓展程序的能力，符合开放-封闭原则。

多态的作用是：  
通过把过程化的条件分支，转化为对象的多态性，从而消除这些分支语句。

多态的优点是：
将行为分布在各个对象中，并让这些对象各自负责自己的行为，对象“做什么”和“怎样去做”，达到了解耦的目的，在未来的拓展中，我们只需要加入相应的对象即可，而不必修改之前的代码。

```js
let makeSound = function (animal) {
  animal.sound();
};
let Duck = function () {};
Duck.prototype.sound = function () {
  console.log('嘎嘎嘎！');
};
let Dog = function () {};
Dog.prototype.sound = function () {
  console.log('汪汪汪！');
};
makeSound(new Duck()); // 嘎嘎嘎！
makeSound(new Dog()); // 汪汪汪！
```

##### 静态类型语言的多态

某些时候，在享受静态类型语言检查带来的安全性的同时，我们亦会感觉到被束缚了手脚。比如在之前的代码中，Java 需要限制 makeSound 函数的传参类型，所以我们需要一个超类，来囊括 Duck 和 Dog。

所以静态类型的面向对象语言通常设计成可以向上转型：当给一个类变量赋值时，这个变量的类型既可以使用这个类本身，也可以使用这个类的超类。

而在 Java 中，这就是继承。比如在以下代码中，我们定义了一个 Animal 抽象类，让 Dog 和 Duck 来继承此类，来实现多态。

```java
public abstract class Animal {
  abstract void makeSound();
}
public class Duck extends Animal {
  public void makeSound() {
    System.out.println('嘎嘎嘎！');
  }
}
public class Dog extends Animal {
  public void makeSound() {
    System.out.println('汪汪汪！');
  }
}
public class AnimalSound {
  public void makeSound(Animal animal) {
    animal.makeSound();
  }
}
public class Test {
  public static void main(String args[]) {
    AnimalSound animal = new AnimalSound();
    Animal duck = new Duck();
    Animal dog = new Dog();
    animalSound.makeSound(duck);
    animalSound.makeSound(dog);
  }
}
```

##### JavaScript 的多态

要实现多态，在静态语言中，归根结底，我们需要消除类型之间的耦合关系，在 Java 中，是向上转型来实现多态。

JavaScript 的变量类型在运行期间是可变的，这意味着，JavaScript 对象的多态性是与生俱来的。一个对象能否被使用，只取决于它是否有相应的方法，而不取决于它是什么类型的对象，所以 JavaScript 并不需要注入向上转型之类的技术来实现多态。

在 JavaScript 中，函数本身也是对象，函数能够被用来封装行为并且被到处传递。当我们对函数发出“调用”的消息时，这些函数会返回不同的结果，这是多态性的一种体现。所以很多设计模式在 JavaScript 中能够使用高阶函数实现。

#### 封装

封装的目的是隐藏信息，狭义的封装指的是封装数据和封装实现。而广义上的封装，还应该包括，封装类型和封装变化。

- 封装数据
  在 Java 类似的语言中，封装数据是由词法分析实现的，比如 Java 提供了 public、private、protected 等关键字来提供不同的访问权限。而 JavaScript 没有提供这些关键字的支持，我们只能依赖变量的作用域来实现封装数据，模拟 public 和 private。比如使用闭包、或者 ES6 的 Symbol 创建私有属性。
- 封装实现
  封装实现使得对象内部的变化对其他对象而言是不可见的，对象对自己的行为负责，其他的对象不关心它的内部实现。封装使得对象之间的耦合变得松散，对象之间通过暴露的 API 来进行通讯。
- 封装类型
  封装类型是静态类型语言中一种重要的封装方式。一般而言，封装类型是通过抽象类和接口来实现的。把对象的真正类型隐藏在抽象类或者接口后。
- 封装变化
  封装变化是从设计模式角度出发而言的。我们把系统中稳定不变的部分和容易变化的部分隔离分开，在系统演化的过程中，我们只需要替换掉那些容易变化的部分，如果这部分也是封装好的，那么替换也是轻而易举地。这最大程度保证了系统的稳定性和可拓展性。

#### 原型模式和基于原型继承的 JavaScript 对象系统

在以类为中心的面向对象编程语言中，类和对象的关系可以类比成铸模和铸件的关系，对象总是从类里创建而来。而在原型编程的思想中，类并不是必须的，一个对象是从另一个对象克隆而来。

原型模式不单是一种设计模式，也被称为一种设计泛型。

原型模式的实现关键，是语言本身是否提供了 Clone 的方法，ECMAScript5 提供了 Object.create 方法，可以用来克隆对象。

```js
let Duck = function () {
  this.sound = '嘎嘎嘎！';
  this.age = '3 Month';
};
let duck = new Duck();
duck.sound = '嘎嘎咕！';
duck.age = '4 Month';
let cloneDuck = Object.create(duck);
console.log(duck.sound); // '嘎嘎咕！'
console.log(duck.age); // '4 Month'
console.log(cloneDuck.sound); // '嘎嘎咕！'
console.log(cloneDuck.age); // '4 Month'
```

原型模式至少包含着以下基本规则：

- 所有的数据都是对象。  
  JavaScript 设计者的本意是除了 undefined 之外，一切都应该是对象，为了实现这一目标，number、boolean、string 也可以通过“包装类”的方法变成对象类型数据来进行处理。 JavaScript 中的根对象就是 Object.prototype ，我们在 JavaScript 中遇到的每个对象，实际上都由它拷贝而来。
- 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。  
  JavaScript 中没有类的概念，使用 new 也只是调用了构造函数，用 new 创建对象的过程，实际上也只是先克隆 Object.prototype 然后再进行其他操作。
- 对象会记住它的原型。  
  JavaScript 给对象提供了一个名为 **proto** 的隐藏属性，某个对象的 **proto** 属性默认会指向它的构造函数的原型对象，即 {Constructor}.prototype 。
- 如果对象无法响应某个请求，它会吧这个请求委托给自己的原型。  
  当一个对象无法响应某个请求的时候，它会顺着原型链把请求传递下去，直到遇到一个可以处理该请求的对象为止。

  ```js
  let parent = {
    name: 'john',
  };
  let Child = function () {};
  Child.prototype = parent;
  let child = new Child();
  console.log(child.name); // john
  ```

在当下的 JavaScript 引擎下，通过 Object.create 来创建对象的效率通常比通过构造函数创建对象慢。  
ES6 带来了新的 Class 愈发，这让 JavaScript 的写法看起来像是一门拥有类的语言，但是其背后仍然是通过原型机制来创建对象。

### this、call、apply

#### this

和其他语言大相径庭的是，JavaScript 的 this 总是指向一个对象，而具体指向哪个对象，是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

this 的指向在实际应用中，大致可分为以下四种：

- 作为对象的方法调用
- 作为普通函数调用
- 构造器调用
- Function.prototype.call 或 Function.prototype.apply 调用

1. 作为对象调用时，this 指向该对象。
2. 作为函数调用时，this 总是指向全局对象。在浏览器的 JavaScript 中，这个全局对象是 window 对象。 在 ES5 的严格模式（strict）下，这种情况下的 this 被规定为不会指向全局对象，而是 undefined
3. 构造器调用，大部分 JavaScript 函数都可以当做构造器使用，当被 new 运算符调用函数时，该函数会返回一个对象，通常情况下，构造器里的 this 就指向这个被返回的对象。  
   需要注意的是如果构造器显式地返回了一个 Object 类型的对象，那么此次运算结果最终会返回这个对象，而不是我们期待的 this
4. Function.prototype.call 和 Function.prototype.apply 调用。 两者会动态地改变传入函数的 this。

##### This 的丢失问题

```js
let obj = {
  name: 'jxd',
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName()); // jxd
let getName2 = obj.getName;
console.log(getName2()); // undefined
```

在调用 getName2 时，此时是普通函数调用方式，this 是指向全局 window 的，所以程序的执行结果是 undefined

#### call 和 apply

在 JavaScript 的设计模式实现中，两个方法的应用非常广泛，掌握这两个方法是成为 JavaScript 工程师的重要一步。
Function.prototype.call 和 Function.prototype.apply 它们的作用于洋，区别在于传入参数不同。

- apply  
  apply 接受两个参数，第一个参数指定了函数内 this 的指向。第二个参数为一个带下标的集合，apply 把这个集合中的元素作为参数传递给被调用的函数。

  ```js
  let func = function (a, b, c) {
    console.log(a, b, c);
    console.log(this.name);
  };
  let obj = {
    name: 'jxd',
  };
  func.apply(obj, [1, 2, 3]);
  // 1 2 3
  // jxd
  ```

- call
  call 传入的参数数量不固定，第一个参数与 apply 一样，欧式当前函数体内的 this 指向，从第二个参数开始，每个参数被依次传入函数。

  ```js
  let func = function (a, b, c) {
    console.log(a, b, c);
    console.log(this.name);
  };
  let obj = {
    name: 'jxd',
  };
  func.apply(obj, 1, 2, 3);
  // 1 2 3
  // jxd
  ```

需要注意的是，如果我们传入的第一个参数是 null，函数体内的 this 会指向默认的宿主对象，在浏览器中则是 window。

```js
let func = function (a, b, c) {
  console.log(this === window);
};
func.apply(null, [1, 2, 3]); // true
```

#### call 和 apply 的用途

1.  改变 this 指向  
    比如我们想把 document.getElementById 封装成一个函数，那么作为普通函数，getId 的 this 是 undefined，因为 getElementById 内部也有用到 this，就会出现问题。所以需要改变 this 的指向。

    ```js
    document.getElementById = (function (func) {
      return function () {
        return func.apply(document, arguments);
      };
    })(document.getElementById);
    let getId = document.getElementById;
    let div = getId('div1');
    console.log(div.id); // div1
    ```

2.  Function.prototype.bind
    大部分浏览器都内置了 Function.prototype.bind，用来指定函数内部的 this 指向，我们可以用 call 或者 apply 来模拟一个。
    比如这里就相当于把 func 函数“包装”了一下，替换成了另一个函数。

    ```js
    Function.prototype.bind = function (context) {
      let self = this; // 作为对象的方法被调用，指向对象
      return function () {
        return self.apply(context, arguments);
      };
    };
    let obj = {
      name: 'jxd',
    };
    let func = function () {
      console.log(this.name);
    }.bind(obj);
    func();
    ```

3.  借用其他对象的方法

- 借用构造函数
  比如在 B 的构造函数中，使用 apply 调用 A 的构造函数，这样 B 就可以使用到 A 里的属性，实现类似继承的效果。

  ```js
  let A = function (name) {
    this.name = name;
  };
  let B = function () {
    A.apply(this, arguments);
  };
  B.prototype.getName = function () {
    return this.name;
  };
  let b = new B('jxd');
  console.log(b.getName());
  ```

- 借用内置方法
  比如函数的 arguments 是一个类数组对象，有下标。但是不能进行排序和添加操作。我们可以借用 Array.prototype 上的方法。

  ```js
  (function () {
    Array.prototype.push.call(arguments, 3);
    console.log(arguments);
  })(1, 2);
  ```

### 闭包和高级函数

#### 闭包（closure）

##### 两个前置知识

- 变量的作用域

  - 函数中声明一个变量，如果没有加 var 之类的声明关键字，这个变量就会成为全局变量，造成冲突，在 strict 模式下报错。
  - var 在函数中声明的变量是局部变量，只有在该函数内部才能访问到这个变量，在函数外面是访问不到的。

  ```js
  var func = function () {
    var a = 1;
    console.log(a); // 1
  };
  func();
  console.log(a); // undefined
  ```

  - const、let 新增了块级作用域概念，即 {} 内部声明的变量在其内部才能访问，在 {} 外部是访问不到的。

- 变量的生存周期

  - 全局变量的生存周期是永久的，除非我们主动销毁。
  - var 关键字生命的局部变量，当退出函数时，局部变量也会随着函数调用结束而被销毁。

  ```js
  // 退出函数后，局部变量a将被销毁
  let func = function () {
    let a = 1;
    console.log(a);
  };
  func();
  ```

  ```js
  /**
   * 与之前的相反，退出函数后，局部变量a并没有消失，这是因为，当执行 let fn = func(); 时，f返回了一个匿名函数的引用，它可以访问到func()被调用时的函数，而局部变量a一直处在这个环境中，这就产生了一个闭包结构，局部变量的声明看起来被延续了。
   */
  let func = function () {
    let a = 1;
    return function () {
      a++;
      console.log(a);
    };
  };
  let fn = func();
  fn(); // 2
  fn(); // 3
  fn(); // 4
  ```

根据闭包，我们可以编写 Type 对象来封装一个类型判断工具，代码如下：

```js
let Type = {};
for (let i = 0, type; (type = ['String', 'Array', 'Number'][i++]); ) {
  (function (type) {
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    };
  })(type);
}
console.log(Type.isArray([])); // true
console.log(Type.isString('str')); // true
```

##### 闭包的作用

1. 封装变量
   闭包可以帮助把一些不需要暴露再全局的变量封装成“私有变量”
2. 延长变量寿命

3. 可以用闭包来实现面向对象

4. 可以用闭包实现一些设计模式

##### 闭包和面向对象设计

过程与数据的结合是面向对象系统中形容“对象”的常用表达。对象是以方法的形式包含了过程，而闭包则实在过程中以环境的形式包含了数据。所以我们可以用闭包来实现一个完整的面向对象系统。  
闭包的写法是：

```js
var extent = function () {
  var value = 0;
  return {
    call: function () {
      value++;
      console.log(value);
    },
  };
};
var extent = extent();
extent.call(); // 1
extent.call(); // 2
```

面向对象的写法是：

```js
var extent = {
  value: 0,
  call: function () {
    this.value++;
    console.log(this.value);
  },
};
extent.call(); // 1
extent.call(); // 2
```

或者：

```js
let Extent = function () {
  this.value = 0;
};
Extent.prototype.call = function () {
  this.value++;
  console.log(this.value);
};
let extent = new Extent();
extent.call(); // 1
extent.call(); // 2
```

##### 闭包和命令模式

命令模式的意图是把请求封装成对象，从而分离请求的发起者和请求的接收者（执行者）之间的耦合关系。在命令执行之前，可以预先往命令对象中植入命令的接收者。

```js
var Tv = {
  open: function () {
    console.log('打开电视机');
  },
  close: function () {
    console.log('关闭电视机');
  },
};
var createCommand = function (receiver) {
  var execute = function () {
    return receiver.open();
  };
  var undo = function () {
    return receiver.close();
  };
  return {
    execute: execute,
    undo: undo,
  };
};
var setCommand = function (command) {
  document.getElementById('execute').onclick = function () {
    command.execute();
  };
  document.getElementById('undo').onclick = function () {
    command.undo();
  };
};
setCommand(createCommand(Tv));
```
