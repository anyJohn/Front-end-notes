### 盒子模型

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距、边框、填充和实际内容。  
盒模型允许我们在其他元素和周围元素边框之间的空间放置元素。  
`margin` -> `border` -> `padding` -> `content`

盒模型分为两种，第一种是 W3C 标准的盒子模型（标准盒模型）、第二种是 IE 标准的盒子模型（怪异盒模型）。

1. 标准盒模型的`width`是指内容区域`content`的宽度；`height`是指内容区域`content`的高度。标准盒模型下盒子的大小 = `content` + `border` + `padding` + `margin`
2. 怪异盒模型中的`width`指的是内容、边框、内边距总的宽度（content）；`height`指的是内容、边框、内边距总的高度。怪异盒模型下盒子的大小 = `width(content + border + padding)` + `margin`
