## Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 `mutation`。Vuex 中的 `mutation` 类似于 redux 的事件：每个 `mutation` 都有一个字符串的**事件类型（type）和一个回调函数（handler）**。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。

```js
const store = createStore({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
```

你不能直接调用一个 `mutation` 处理函数，这个选项更像是事件注册：“当触发一个类型为`increment`的`mutation`时，调用此函数。”要调用一个 mutation 处理蛤属，需要以相应的 type 调用`store.commit`方法：

```js
store.commit('increment');
```

### 提交载荷（payload）

可以向 `store.commit` 传入额外的参数，即 `mutation` 的**载荷（payload）**：

```js
mutation: {
  increment (state,n) {
    state.count += n
  }
}
```

```js
store.commit('increment', 10);
```

大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 `mutation` 会更易读：

```js
mutations: {
  increment (state,payload) {
    state.count += payload.amount
  }
}
```

```js
store.commit('increment', {
  amount: 10,
});
```

### 使用常量替代 `Mutation` 事件类型

使用常量替代 `mutation` 事件类型在各种 `Flux` 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的其他开发者对整个 app 包含的 mutation 一目了然：

```js
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION';
```

```js
// store.js
import { createStore } from 'vuex';
import { SOME_MUTATION } from './mutation-types';

const store = createStore({
  state: {},
  mutations: {
    [SOME_MUTATION](state) {},
  },
});
```

### Mutation 必须是同步函数

采用同步函数的原因是为了调试友好，也就是 devTools 能够有效追踪`store.commit` 之后的数据变更。其实在 mutation 中采用异步函数仍然是有效的。

### 在组件中提交 Mutation

在组件中使用`this.$store.commit('mutationType')`提交 mutation，或者使用`mapMutations`辅助函数将组件中的 methods 映射成为`store.commit`

```js
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['increment', 'incrementBy']),
    ...mapMutations({
      add: 'increment', // 将this.add映射为this.$store.commit('increment')
    }),
  },
};
```
