## 序言

> 设计模式的定义是: 在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。
> 通俗的说，就是给面向对象软件开发中的好的设计取个名字。

设计原则：

* 单一职责原则
* 最少知识原则
* 开放-封闭原则
* 依赖倒置原则

## The first part - 基础知识

### 面向对象的 JavaScript

#### 动态语言和鸭子类型

编程语言按照数据类型的大体分为两类：

* 静态类型语言
  + 编译时就能发现类型不匹配的错误
  + 编辑器友好
  + 编译器可以针对性优化，性能好
  + 在编写时，需要时刻关心类型，心智负担大，代码量大
* 动态类型语言
  + 代码量少，逻辑简单
  + 可读性好，专注于逻辑表达
  + 无法保证变量的类型，可能发生类型相关错误

鸭子类型（duck typing）：

动态类型语言的设计建立在鸭子类型上，即我们只关心对象行为，而不关心对象本身。“如果它走起路来像鸭子，叫起来也像鸭子，那么他就是鸭子”。

比如圣上需要建立一个内阁，需要 10 位学者来传达圣旨，可是王国找来找去也只有 9 位学者，那么如果有 1 只鸭子，也能够传达圣旨，那么就可以把它加入到我们的内阁里来。

```js
let scholar = {
    conveyOrders: function(arg) {
        console.log('奉天承运，皇帝诏曰', arg);
    },
    study: function() {
        console.log('科学研究');
    },
    type: 'scholar',
};
let duck = {
    conveyOrders: function(arg) {
        console.log('奉天承运，皇帝诏曰', arg);
    },
    duckCall: function() {
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
let makeSound = function(animal) {
    animal.sound();
};
let Duck = function() {};
Duck.prototype.sound = function() {
    console.log('嘎嘎嘎！');
};
let Dog = function() {};
Dog.prototype.sound = function() {
    console.log('汪汪汪！');
};
makeSound(new Duck()); // 嘎嘎嘎！
makeSound(new Dog()); // 汪汪汪！
```

##### 静态类型语言的多态

某些时候，在享受静态类型语言检查带来的安全性的同时，我们亦会感觉到被束缚了手脚。比如在之前的代码中，Java 需要限制 makeSound 函数的传参类型，所以我们需要一个超类，来囊括 Duck 和 Dog。

所以静态类型的面向对象语言通常设计成可以向上转型：当给一个类变量赋值时，这个变量的类型既可以使用这个类本身，也可以使用这个类的超类。

而在 Java 中，这就是继承。比如在以下代码中，我们定义了一个Animal抽象类，让Dog和Duck来继承此类，来实现多态。

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

##### JavaScript的多态

要实现多态，在静态语言中，归根结底，我们需要消除类型之间的耦合关系，在Java中，是向上转型来实现多态。

JavaScript的变量类型在运行期间是可变的，这意味着，JavaScript对象的多态性是与生俱来的。一个对象能否被使用，只取决于它是否有相应的方法，而不取决于它是什么类型的对象，所以JavaScript并不需要注入向上转型之类的技术来实现多态。

在JavaScript中，函数本身也是对象，函数能够被用来封装行为并且被到处传递。当我们对函数发出“调用”的消息时，这些函数会返回不同的结果，这是多态性的一种体现。所以很多设计模式在JavaScript中能够使用高阶函数实现。

#### 封装

封装的目的是隐藏信息，狭义的封装指的是封装数据和封装实现。而广义上的封装，还应该包括，封装类型和封装变化。 
* 封装数据
  在Java类似的语言中，封装数据是由词法分析实现的，比如Java提供了public、private、protected等关键字来提供不同的访问权限。而JavaScript没有提供这些关键字的支持，我们只能依赖变量的作用域来实现封装数据，模拟public和private。比如使用闭包、或者ES6的Symbol创建私有属性。
* 封装实现
  封装实现使得对象内部的变化对其他对象而言是不可见的，对象对自己的行为负责，其他的对象不关心它的内部实现。封装使得对象之间的耦合变得松散，对象之间通过暴露的API来进行通讯。
* 封装类型
  封装类型是静态类型语言中一种重要的封装方式。一般而言，封装类型是通过抽象类和接口来实现的。把对象的真正类型隐藏在抽象类或者接口后。
* 封装变化
  封装变化是从设计模式角度出发而言的。我们把系统中稳定不变的部分和容易变化的部分隔离分开，在系统演化的过程中，我们只需要替换掉那些容易变化的部分，如果这部分也是封装好的，那么替换也是轻而易举地。这最大程度保证了系统的稳定性和可拓展性。

#### 原型模式和基于原型继承的 JavaScript 对象系统

在以类为中心的面向对象编程语言中，类和对象的关系可以类比成铸模和铸件的关系，对象总是从类里创建而来。而在原型编程的思想中，类并不是必须的，一个对象是从另一个对象克隆而来。

原型模式不单是一种设计模式，也被称为一种设计泛型。

它至少包含着以下基本规则：
* 所有的数据都是对象。
* 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
* 对象会记住它的原型。
* 如果对象无法响应某个请求，它会吧这个请求委托给自己的原型。
