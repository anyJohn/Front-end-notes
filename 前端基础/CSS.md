### 盒子模型

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距、边框、填充和实际内容。  
盒模型允许我们在其他元素和周围元素边框之间的空间放置元素。  
`margin` -> `border` -> `padding` -> `content`

盒模型分为两种，第一种是 W3C 标准的盒子模型（标准盒模型）、第二种是 IE 标准的盒子模型（怪异盒模型）。

1. 标准盒模型的`width`是指内容区域`content`的宽度；`height`是指内容区域`content`的高度。标准盒模型下盒子的大小 = `content` + `border` + `padding` + `margin`
2. 怪异盒模型中的`width`指的是内容、边框、内边距总的宽度（content）；`height`指的是内容、边框、内边距总的高度。怪异盒模型下盒子的大小 = `width(content + border + padding)` + `margin`

### 居中

#### 水平居中

- 行内元素：`text-align:center`
- 定宽的块级元素：`margin:0 auto`或者`position`:absolute;margin-left:-width/2`;或者`table`布局
- 宽度未知的块级元素

1. `table-cell`,`display: table-cell;text-align:center;`
2. inline-block 实现水平居中，`display: inline-block;text-align: center`
3. `display: absolute; transform: translateX(50%)`
4. flex 布局，`justify-content: center`

#### 垂直居中

- `line-height`实现居中
- 绝对定位加`margin: auto 0`实现自适应居中
- 弹性布局，子级设置`margin: auto 0`自适应居中
- 绝对定位，`transform: translateY(50%)`
- table 布局，设置`display: table-cell;vertical-align: middle`。

### 隐藏元素

1. `opacity: 0`。透明度 0，元素隐藏，不影响页面布局，元素的比如 click，事件，如果点击也会触发。
2. `visibility: hidden`: 元素隐藏，不影响页面布局，不会触发该元素绑定的事件，文档布局中仍然保留原来的空间（重绘）
3. `display: none`，元素隐藏，改变页面布局（回流+重绘）

### 布局

#### 浮动布局

元素浮动脱离文档流，做图文的环绕式混排，缺点是父元素塌陷。

#### flex 布局

https://ruanyifeng.com/blog/2015/07/flex-grammar.html

#### Rem 布局

Rem 相对于根`html`标签的`font-size`大小来进行计算。rem 布局的本质是等比缩放，一般是基于宽度。使用 less 来解决 px 转 rem 过于复杂的问题。

### 清除浮动

- 添加额外标签，设置`clear:both` 属性
- 父级添加 overflow 属性，或者设置高度
- 建立伪类，设置`clear: both`属性

### 绘制三角形

```css
div {
  /* 盒子宽高都为零，三面边框皆透明 */
  width: 0px;
  height: 0px;
  border-right: 100px solid #ff0;
  border-left: 100px solid transparent;
  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
}
```

### BFC

BFC 即 Block Formatting Contexts（块级格式化上下文），它属于上述定位方案的普通流。  
具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的特性。

#### 触发 BFC

- `body`根元素
- 浮动元素：`float`除`none`以外的值
- 绝对定位元素：`position: absolute/fixed`
- `display: inline-block/table-cell/flex`
- `overflow: hidden/auto/scroll`

#### BFC 特性以及应用

1.  同一 BFC 下外边距会发生折叠，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。

```html
<head>
  <style lang="css">
    .fold {
      width: 100px;
      height: 100px;
      background: blue;
      margin: 100px;
    }
    .container {
      overflow: auto;
    }
    p {
      width: 100px;
      height: 100px;
      background: blue;
      margin: 100px;
    }
  </style>
  <body>
    <div class="fold"></div>
    <div class="fold"></div>
    <div class="container">
      <p></p>
    </div>
    <div class="container">
      <p></p>
    </div>
  </body>
</head>
```

2. BFC 可以包含浮动的元素（清除浮动）

```html
<div style="border: 1px solid #000;overflow: hidden">
  <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

3. BFC 可以阻止元素被浮动元素覆盖（实现两列布局，去掉右侧的`width`属性）

```html
<div
  style="height: 100px;width: 100px;float: left;background: blue;overflow:auto;"
>
  左浮动的元素，左侧栏
</div>
<div style="width: 200px; height: 200px;background: #eee">右侧栏</div>
```
