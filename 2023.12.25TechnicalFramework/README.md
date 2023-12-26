**Technical and Framework**



## 1、HTML



## 2、CSS

## 3、Vue.js



![image-20231225200200891](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252002113.png)

![image-20231225200338340](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252003394.png)

[002_尚硅谷Vue技术_Vue简介_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Zy4y1K7SH/?p=2&vd_source=591db91b15fb99b2280157ce6d306c42)

![image-20231225200714956](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252007143.png)

js控制 DOM Document Object Model

[【前端经典】dom元素的获取，dom入门教程，js元素对象的操作getelement，网页设计与制作，前端开发。_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1cS4y1H74o/?spm_id_from=333.337.search-card.all.click&vd_source=591db91b15fb99b2280157ce6d306c42)

![image-20231225201749095](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252017149.png)

![image-20231225202055376](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252020516.png)



原生的JS是在inner中放入文件，更新全部的DOM元素

而

![image-20231225202248234](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252022336.png)

Diff算法比较两种DOM

![image-20231225202341009](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252023067.png)

### 1、ES6语法规范

EcmaScript

前端三大框架：

#### 1、react 

React是由Facebook开发的一个流行的JavaScript库，用于构建用户界面。它采用了组件化的开发模式，将界面拆分成独立的组件，使得开发更加模块化和可维护。React采用了虚拟DOM技术，通过最小化DOM操作来提高性能。

- 虚拟DOM和高效的更新机制，提升性能。
- 大量的开源组件和生态系统，加速开发进程。
- 社区庞大，有丰富的教程和文档资源。

缺点：

- React本身只关注视图层，其他功能需要借助第三方库或框架。

![image-20231225204305458](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252043556.png)

#### 2、vue



![image-20231225204315743](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252043817.png)

#### 3、angular

Angular是由Google开发的前端框架，是一个完整的、一站式的解决方案。它采用了双向数据绑定，提供了丰富的特性，如依赖注入、模块化、路由等。

![image-20231225204450784](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252044873.png)

[【WEB框架】React, Angular, Vue - 2021年到底用哪个？_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1wf4y167do/?spm_id_from=333.337.search-card.all.click&vd_source=591db91b15fb99b2280157ce6d306c42)

![image-20231225204127533](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312252041640.png)

React, Vue和Angular都是流行的前端JavaScript框架，用于构建用户界面，但它们在设计理念、语法和工作方式上有一些显著的区别。

1. **设计理念：**
   - **React：** React是由Facebook开发的，它的设计理念是将应用程序分解为可重用的组件。React采用了虚拟DOM的概念，通过比较虚拟DOM的变化来最小化实际DOM操作，提高性能。
   - **Vue：** Vue是一位独立开发者创建的，它的设计目标是简单、灵活，易于集成到其他项目中。Vue强调渐进性增强，可以逐步应用到项目中。
   - **Angular：** Angular是由Google开发的，它是一个完整的框架，提供了强大的功能集，包括双向数据绑定、依赖注入等。Angular使用TypeScript作为主要开发语言。
2. **语法：**
   - **React：** 使用JSX（JavaScript XML）语法，将HTML和JavaScript混合在一起，使得组件的结构更清晰。React组件的状态管理是通过`setState`来实现的。
   - **Vue：** 使用模板语法，将HTML和JavaScript分开，但通过指令将它们连接在一起。Vue组件的状态管理可以通过`data`属性进行。
   - **Angular：** 使用TypeScript，并采用HTML模板语法。它有强大的双向数据绑定系统，通过在组件中使用`ngModel`等指令来实现。
3. **学习曲线：**
   - **React：** 相对较小且专注于组件的重用，学习曲线相对较低，但由于生态系统的不断增长，可能需要学习更多的工具和库。
   - **Vue：** 被认为是最易学的框架之一，因为它的设计目标是简单和灵活，可以逐步应用到项目中。
   - **Angular：** 学习曲线较陡峭，因为它是一个完整的框架，包含许多概念和特性，同时使用了TypeScript，这可能对初学者来说是一个挑战。
4. **生态系统和工具：**
   - **React：** 拥有庞大的生态系统和活跃的社区支持，有许多第三方库和工具可用。
   - **Vue：** 生态系统相对较小，但也在不断发展，社区支持良好。
   - **Angular：** 拥有强大而完整的生态系统，包括Angular CLI用于项目脚手架，RxJS用于处理异步操作等。

总体而言，选择使用React、Vue还是Angular取决于项目的需求、开发团队的技能和偏好，以及框架提供的功能和性能特性。







#### 4、rest 和spread



#### 5、属性

在 JavaScript 中，可以使用两种方式访问对象的属性：点符号（`object.property`）和方括号符号（`object['property']`或`object[property]`）。这两种方式有一些区别：

1. **点符号 (`object.property`)：**

   适用于属性名是一个合法的标识符（变量名）的情况。

   更简洁易读，通常在属性名是硬编码的情况下使用。

```javascript
let game = {
    up: function() {
        console.log("我可以改变形状");
    }
};

// 使用点符号访问属性
game.up();
```

**方括号符号 (`object['property']` 或 `object[property]`)：**

- 适用于属性名包含特殊字符、空格，或者是`动态生成`的情况。
- 允许使用变量来动态指定属性名。

```javascript
javascript
let game = {
    'method up': function() {
        console.log("我可以改变形状");
    }
};

// 使用方括号符号访问属性
game['method up']();
```

或者使用变量：

```javascript
let propertyName = 'up';

// 使用变量动态指定属性名
game[propertyName]();
```

在你的例子中，`game[methods.up]` 和 `game[methods.down]` 使用方括号符号访问对象的属性。这是因为 `methods.up` 和 `methods.down` 是通过 `Symbol` 创建的唯一符号，这样可以确保属性名的唯一性，而方括号符号允许使用这样的符号作为属性名。

#### 6、Iterator

迭代器是一种接口（对象里面的一种属性）

![image-20231226170551305](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261705772.png)

#### 5、for of/in

of 取内容 键值

in 取index索引 、键名

![image-20231226173813031](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261738123.png)





#### 6、迭代器

在你的两个例子中，主要区别在于是否调用 `Symbol.iterator` 方法：

**调用 `Symbol.iterator` 方法：**

```javascript
let iterator = xiyou[Symbol.iterator]();
console.log(iterator);
```

这里，`xiyou[Symbol.iterator]()` 表示调用了数组 `xiyou` 上的 `Symbol.iterator` 方法，得到了一个迭代器对象，并将其赋值给 `iterator` 变量。`console.log(iterator)` 输出的是迭代器对象本身。

**获取 `Symbol.iterator` 方法的引用：**

```javascript
let iterator2 = xiyou[Symbol.iterator];
console.log(iterator2);
```

这里，`xiyou[Symbol.iterator]` 表示获取了数组 `xiyou` 上的 `Symbol.iterator` 方法的引用，并将其赋值给 `iterator2` 变量。注意，这里没有调用方法，仅仅是获取了方法的引用。`console.log(iterator2)` 输出的是函数本身而不是迭代器对象。

总结一下：

- `xiyou[Symbol.iterator]()`：调用了数组 `xiyou` 上的 `Symbol.iterator` 方法，获得了一个迭代器对象。
- `xiyou[Symbol.iterator]`：获取了数组 `xiyou` 上的 `Symbol.iterator` 方法的引用，这是一个函数。

![image-20231226174543086](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261745164.png)

当你使用 `let iterator2 = xiyou[Symbol.iterator];` 时，你实际上是将数组 `xiyou` 上的 `Symbol.iterator` 方法的引用赋值给 `iterator2` 变量，而不是调用该方法。

`Symbol.iterator` 方法返回一个迭代器对象，这个对象具有 `next` 方法，用于按顺序访问数组中的元素。但是，你只是获取了这个方法的引用，并没有调用它。因此，`iterator2` 实际上是一个函数，而不是迭代器对象。

当你使用 `console.log(iterator2);` 输出 `iterator2` 时，`console.log` 将函数对象的内容打印到控制台。这就是为什么你看到输出中包含了函数的一些属性，如 `length`、`name` 等。这并不是迭代器对象的属性，而是 `Function` 对象的属性。



在 JavaScript 中，迭代器（Iterator）是一种用于遍历数据集合的协议。迭代器对象包含一个 `next` 方法，每次调用都会返回一个包含两个属性的对象：`value` 和 `done`。

1. **`value` 属性：** 表示迭代器当前位置的值。在迭代过程中，`value` 存储着当前被迭代到的元素的值。
2. **`done` 属性：** 一个布尔值，表示迭代是否已经完成。当迭代器遍历到最后一个元素后，`done` 为 `true`，表示迭代结束；否则，`done` 为 `false`，表示还有更多的元素需要遍历。

![image-20231226175705590](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261757661.png)

```javascript
 [Symbol.iterator]() {
                //索引变量
                let index = 0;
                //
                let _this = this;
                return {
                    next: () => {
                        if (index < this.stus.length) {
                            console.log(this);
                            const result = { value: _this.stus[index], done: false };
                            //下标自增
                            index++;
                            //返回结果
                            return result;
                        }else{
                            return {value: undefined, done: true};
                        }
                    }
                };
            }
```



#### 7、生成器

异步编程 参数传递

异步编程 文件操作 网络操作（ajax，request） 数据库操作

node  fs ajax  MongoDB

![image-20231226191618777](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261916880.png)



##### 1、回调地狱

![image-20231226192601783](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261926849.png)

##### 2、生成器异步回调

![image-20231226193020011](https://daetz-image.oss-cn-hangzhou.aliyuncs.com/img/202312261930081.png)



#### 8、Promise





### 2、ES6模块化



### 3、包管理器 npm\yum



### 4、原型、原型链



### 5、数组



### 6、axios



### 7、promise





## 4、Java





## 5、Spring Boot

## 6、MyBatis Plus

## 7、Vue.js

## 8、ElementUI

## 9、axios

## 10、JWT

## 11、Spring

## 12、SpringMVC

## 13、Mybatis