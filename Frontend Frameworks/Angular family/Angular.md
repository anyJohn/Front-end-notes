# Angular

## what is Angular?

Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps which build on TypeScript.

Angular 是一个基于 TypeScript 构建的高效而精美的单页应用的应用设计框架和开发平台。

Angular includes：

- A Component-based framework for building scalable web applications
- A collection of well-integrated libraries that cover a wide variety of features,including routing,forms management,client-server communication,and more
- A suite of developer tools to help you develop,build,test,and update your code

Angular 包括：

- 一个基于组件的框架，用于构建弹性的 Web 应用
- 一组完美集成的库，涵盖各种功能，包括路由、表单管理、客户端-服务器通讯等
- 一套开发者工具来帮助你开发、构建、测试和更新代码

Angular 的设计目标之一就是让更新变得更容易，一次可以用最小成本升级到最新的 Angular 版本。

### Angular application: The essentials

This section explains Core ideas behind Angular，understanding these ideas can help you design and build your application more effectively.

#### Component 组件

组件是组成应用的构成要素。组件包括三个部分：带有`@component`装饰器的 TypeScript 类、HTML 模板和样式文件。`@component` 装饰器会指定如下 Angular 专属信息：

- CSS 选择器，定义如何在模板中使用组件。模板中与之相匹配的 HTML 元素将成为该组件的实例。即组件在模板中使用时的名称。
- HTML 模板：Angular 会根据模板渲染组件，可选内联或者外部引用。
- 可选的 CSS 样式，会应用到组件的模板中。

```typescript
import { Component } from "@angular/core";
@Component( {
    selector:'hello-world',
    template:'
        <h1>Hello World</h1>
        <p>First Component</p>
    '
})
export class HelloWorldComponent {
    // code
}
```

组件模型提供了强大的封装能力和直观的应用结构。组件让应用易于单元测试，并提高代码的整体可读性。

#### Template 模板

每个组件都有一个 HTML 模板，用于渲染组件。你可以内联或者通过路径引用外部文件来定义模板。
在模板中，可以使用 Angular 扩展的语法，使得可以从组件中插入动态值，当组件的状态更改时，Angular 会自动更新已渲染的 DOM。

比如下面的插值（`{{ fontColor }}`），属性绑定（`[disabled]="canClick"`）,事件监听（`(click)=''sayMessage`）

```typescript
// hello-world.ts
import { Component } from "@angular/core";
@Component({
  selector: "hello-world",
  templateUrl: "./hello-world.component.html",
})
export class HelloWorld {
  canSay = false;
  message = "Hello World!";
  fontColor = "blue";
  sayHelloId = 1;
  canClick = false;
  sayMessage() {
    if (canSay) {
      alert(this.message);
    }
  }
}
```

```html
<!-- hello-world.component.html -->
<button type="button" [disabled]="canClick" (click)="sayMessage()">
  Trigger alert message
</button>
<p *ngIf="canSay; else noSay">you can Trigger alert message</p>
<ng-template #noSay>
  <p>You can't Trigger alert message</p>
</ng-template>
<p [id]="sayHelloId" [style.color]="fontColor">
  Set Color with parameter at component class
</p>
<p>Color is {{fontColor}}</p>
```

还可以使用指令为模板添加功能，最常用的是 `*ngIf` 和 `*ngFor` 。用指令可以动态修改 DOM 结构。

#### Dependency injection 依赖注入

依赖注入是实现代码复用的一种方式，让你可以声明 TypeScript 的依赖项，而无需担心如何实例化它们，把数据处理抽象成 service，使得代码更灵活、更可测试、复用性更强。

比如下面的`logger.service.ts`中定义了一个`Logger`类。包含一个`Logger`类，包含一个`writeCount`函数。

```typescript
// logger.service.ts
import { Injectable } from "@angular/core";
@Injectable({ provideIn: "root" })
export class Logger {
  writeCount(count: number) {
    console.log(count);
  }
}
```

我们就可以在组件的构造器中注入这个服务。

```typescript
import { Component } from "@angular/core";
import { Logger } from "./logger.service";

@Component({
  selector: "hello-world",
  templateUrl: "./hello-world.component.html",
})
export class HelloWorldComponent {
  count = 0;
  constructor(private logger: Logger);
  onLog() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
```

### Angular CLI

Angular 的脚手架工具，提供了打包、热更新运行、生成、单元测试等功能。

### First-part libraries 自带库

Angular 平台提供了众多的自带库，来满足不断成长的应用需求，比如导航、用户输入等。丰富的自带库是 Angular 的优势之一。  
包括：

- Angular Router，路由器，支持懒加载、嵌套、自定义匹配规则等。
- Angular Forms，表单，统一的表单填报和验证体系。
- Angular HttpClient，Http 客户端库，可以支持更高级的客户端-服务器通讯。
- Angular Animations，动画，用于驱动基于应用状态的动画。
- Angular PWA，构建渐进式 Web 应用的工具，包括 Service Worker 和 Manifest 清单。

