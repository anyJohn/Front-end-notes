## 与 react 16.8+的比较

### 经典问题

#### Vue template VS JSX

其实是解决渲染的两个不同思路。  
Vue 也可以使用 JSX。JSX 也可以在工程化角度，解析抽象语法树 AST，来实现解析模板指令。

#### 代码逻辑复用

UI 层面的复用是毫无问题的，组件化本身就是可组合的。重点在于代码逻辑的复用。在实现代码复用的道路上，Vue 和 React 是类似的。都经历了：  
Mixins -> Hoc -> render prop -> hooks (function based api / vue composition API)。

> 备注：Mixin 还有 HOC 可以展开思考，为什么两个框架都选择了 hooks 的写法  
> 虽然写法类似，但是 composition API（VCA） 与 Hooks 有着本质上的区别，VCA 是显式暴露了响应式系统，即显式声明响应式数据，而 Hooks 则是 react 重新封装的全新的一个东西了。`setup`函数是生命周期函数，也就是说只在组件创建时执行一次。而 react 每次渲染都会执行，所以 react hooks 有以下规则，不要调用 hooks 内的循环、嵌套函数或状态。下面会详细讲一下。

### 核心差异

#### 首先要确认的是，Vue 和 React 都是**单向数据流**

**双向绑定**只是针对表单而言，表单的双向绑定原理上不过是 `value` 的单向绑定 + `onChange` 事件监听的语法糖，所以单向数据流并不是二者的设计理念差异。
真正的差异在于，**数据响应式的实现方式**。

#### Vue 对于数据变化更敏感、精确，React 的数据变化依赖于开发者：

- Vue2 通过 ES5 的 `object.defineProperty` 拦截， Vue3 使用 ES6 的 `proxy` 代理拦截，解决了数组变化和新增对象的响应式问题，但不会兼容 IE11 以下。
- React 并不知道何时刷新，触发局部重新变化是有开发者调用 `setState()`完成。

比如以下业务场景：

- React `setState` 会触发局部更新，为了达到更好的性能，React 暴露出 `shouldComponentUpdate` 这一生命周期，来让开发者自己决定什么时候重新渲染。比如我们从接口拿到一个数据或者说做了一个计算操作，有的时候结果是相同的，这时候 `setState` 也会触发页面的重新渲染，这时候可以使用 `shouldComponentUpdate` 来优化性能。（[React 利用 shouldComponentUpdate 优化性能](https://www.cnblogs.com/penghuwan/p/6707254.html) ）。
- 为了性能优化，`setState`的行为会在 React 中做合并操作，因此`setState`有时是同步的，有时是异步的。
  [React 中 setState 更新 state 何时同步何时异步？](https://www.jianshu.com/p/799b8a14ef96)。比如以下代码：

```js
import React, { useState } from 'react';
export default ({ initNumber = 0 }) => {
  const emit = (data) => {
    // 总会延迟一次
    console.log('data', data);
  };
  const [state, setState] = useState(initNumber);
  return (
    <button
      onClick={() => {
        setState((state) => state + 1);
        emit({ state });
      }}
    >
      emit {state}
    </button>
  );
};
```

```js
// hooks规范，不能将useEffect放在条件判断语句内，下面会谈到为什么。
import React, { useState, useEffect } from 'react';
export default ({ initNumber = 0 }) => {
  const [state, setState] = useState(initNumber);
  const [flag, setFlag] = useState(true);
  const emit = (data) => {
    // 正常运行了
    console.log('data', data);
  };
  useEffect(() => {
    if (!flag) {
      emit({ state });
    }
  });
  return (
    <button
      onClick={() => {
        setState((state) => state + 1);
        setFlag(false);
      }}
    >
      emit {state}
    </button>
  );
};
```

Vue3 因为采用了`proxy`拦截和代理追踪更新，所以不会有这些问题。默认就是优化状态，即多少数据变动就触发多少更新。

```html
<template>
  <button
    @click="
      () => {
        title++;
        handleClick();
      }
    "
  >
    {{ title }}
  </button>
</template>

<script setup>
  import { ref } from 'vue';
  const handleClick = () => {
    console.log('title', title.value);
  };
  const title = ref(0);
</script>
```

#### 那么这截然不同两种设计，就影响和 Hooks 和 vue composition api 的实现和表现。

React hooks 是基于链表实现的，每次组件执行`render`都会顺序执行所有的 hooks，每一个 hooks 的 next 是指向下一个 hooks 的，所以开发者不能再不同的 hooks 调用中使用判断条件，以下代码会报错：

```js
// 之前的代码
import React, { useState, useEffect } from 'react';
export default ({ initNumber = 0 }) => {
  const [state, setState] = useState(initNumber);
  const [flag, setFlag] = useState(true);
  const emit = (data) => {
    console.log('data', data);
  };
  // 不能这样使用
  if (!flag) {
    useEffect(() => {
      emit({ state });
    });
  }
  return (
    <button
      onClick={() => {
        setState((state) => state + 1);
        setFlag(false);
      }}
    >
      emit {state}
    </button>
  );
};
```

而 Vue 是正常的：

```html
<template>
  <button
    @click="
      () => {
        title++;
        handleClick();
      }
    "
  >
    {{ title }}
  </button>
  <h1>{{ msg }}</h1>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  const title = ref(0);
  const handleClick = () => {
    console.log('title', title.value);
  };
  const msg = ref('hello');
  const condition = true;
  if (condition) {
    onMounted(() => {
      console.log('bye');
      msg.value = 'bye';
    });
  }
</script>

<style></style>
```

useEffect 的设计甚至带来了合乎程序逻辑的，但是不太合乎人类逻辑的“闭包陷阱”

```js
function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setInterval(() => {
      console.log(count);
      // 1
    }, 1000);
  }, []);
}
```

#### 设计理念和风格

- React，革命性框架，为开发者提供强大而复杂的机制，开发者必须清楚 react 内部`state`与被 React 包装过的事件合成的机制。其好处是带来了强大的定制化，坏处是心智负担很大，不仅需要了解 html 和 JS 的渲染和异步顺序，也得了解 React 的 `state` 与时间池处理顺序，生态由第三方提供
- Vue ，渐进式框架，为开发者提供开箱即用的框架和生态，生态由 Vue 团队维护，鱿鱼西希望降低开发者的门槛

#### 其他的

预编译优化，Vue `template` 的得天独厚优势。可以带来良好的开发体验和性能优化。而 React 能够负责的只有递归调用`React.createElement`的执行调用，无法进行静态分析。Facebook 团队也在进行 JSX 的优化即 babel 插件还有开发态优化。
