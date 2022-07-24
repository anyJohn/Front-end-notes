## Getter

有时候我们需要从 `state` 派生出一些状态，比如对列表进行过滤并计数，或者对数据进行格式化操作。

如果多个组件需要用到这个状态，我们可以复制这个函数或者将这个函数抽取成公共函数并在多处导入。无论哪种都不是很理想。

Vuex 允许我们在 `store` 中的定义 `getter`。接受`state`为第一个参数。

```js
const store = createStore({
  state: {
    todo: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
  },
  getter: {
    doneTodo(state) {
      return state.todo.filter((todo) => todo.done);
    },
  },
});
```

### 通过属性访问

`Getter` 会暴露为 `store.getter` 对象，你可以以属性的形式访问这些值：

```js
store.getter.doneToDos; // -> [{ id:1, text:'...', done: true }]
```

`Getter` 也可接受其他 getter 作为第二个参数：

```js
getters: {
  doneTodoCount (state, getters) {
    return getters.doneTodo.length
  }
}
```

使用

```js
computed: {
  doneTodoCount() {
    return this.$store.getters.doneTodoCount
  }
}
```

`getter` 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。

### 通过方法访问

你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。

```js
getters: {
  getTodoById: (state) => (id) => {
    return state.todo.find((todo) => todo.id === id);
  };
}
```

```js
store.getters.getTodoById(2);
```

注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。

### `mapGetters` 辅助函数

`mapGetters` 辅助函数仅仅是 `store` 中的 `getter` 映射到局部计算属性：

```js
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['doneTodoCount', 'anotherGetter']),
  },
};
```

```js
...mapGetters({
  doneCount: 'doneTodoCount'
})
```
