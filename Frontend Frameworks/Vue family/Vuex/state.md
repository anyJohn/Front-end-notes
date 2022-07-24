## 单一状态树

Vuex 使用单一状态树，即一个应用只有一个 store，一个 store 包含了全部的应用层级状态。

## 在 Vue 组件中获得 Vuex 状态

```js
const Counter = {
  template: `<div>{{count}}</div>`,
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
```

## mapState

生成计算属性的辅助函数。我们可以使用`...`对象展开符跟局部的计算属性混合使用。

```js
computed: {
  localComputed () {},
  ...mapState({})
}
```
