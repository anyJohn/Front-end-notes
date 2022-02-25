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
