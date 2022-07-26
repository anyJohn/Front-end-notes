## 序言

> 设计模式的定义是: 在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。
> 通俗的说，就是给面向对象软件开发中的好的设计取个名字。

设计原则：

- 单一职责原则
- 最少知识原则
- 开放-封闭原则

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

多态的思想是把“做什么”和“谁去做，怎样去做”区分开，也就是将“不变的事物”和“可能改变的事物”区分开。“不变的事物”隔离开，“变化的事物”封装起来，这就给予了我们拓展程序的能力，符合开放-封闭原则。

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

