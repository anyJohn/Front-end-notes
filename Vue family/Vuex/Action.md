## Action

Action 不同于 mutation

- Action 提交的是 mutation，而不是直接更改 state
- Action 可以包含异步操作

```js
const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(ctx) {
      ctx.commit('increment');
    },
  },
});
```

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用`context.commit`提交一个 mutation，或者通过`context.state`和`context.getters`来获取 state 和 getters，需要知道的是，context 对象并不是 store 实例本身。

### 分发 Action

Action 通过 `store.dispatch`触发：

```js
store.dispatch('increment');
```

Action 同样支持载荷（payload）和对象方式进行分发

```js
store.dispatch('increment', {
  amount: 10,
});
store.dispatch({
  type: 'increment',
  amount: 10,
});
```

## 在组件中分发 Action

`this.$store.dispatch` 或者 `mapActions`辅助函数，将组建的 methods 映射为`store.dispatch`调用

```js
import { mapActions } from 'vuex';
export default {
  ...mapActions(['increment', 'incrementBy']),
  ...mapActions({
    add: 'increment',
  }),
};
```

### 组合 Actions

`store.dispatch`可以处理被触发的 action 的处理函数返回的 Promise，并且`store.dispatch`依旧返回 Promise。

```js
actions: {
  actionA({commit}){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000);
    })
  }
}
```

```js
store.dispatch('actionA').then(() => {});
```

```js
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```
