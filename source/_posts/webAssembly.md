---
title: 初探 webAssembly
date: 2020-01-10 11:07:26
tags: 前沿 webAssembly wasm
---

> 12月初，W3C联盟正式推荐其为Web语言。WebAssembly 成为了继 HTML、CSS 和 JavaScript 之后的第四大Web语言。虽然如此，WebAssembly 还没有真正站稳脚跟。本文就待着好奇认识一下它，并摘录一些关键点。

<!-- more -->

## WebAssembly是什么？

**WebAssembly 或者 wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新字节码格式。**

首先看一下WebAssembly长什么样：
![what_is_WebAssembly](/images/webAssembly/what_is_WebAssembly.jpg)
左侧是用C++实现的求递归的函数。右侧是指令文本。而中间的十六进制Binary Code就是webassembly。

WebAssembly的可读性非常差，这是因为WebAssembly是一个编译目标（编译目标就比如：当我们写TypeScript的时候，Webpack最后打包生成的JavaScript文件就是编译目标），是**从高级语言转换到机器指令文本间的胶接代码(glue code)**。上图的Binary就是左侧的C++代码经过编译器编译之后的结果。

## WebAssembly的由来

### JavaScript的性能瓶颈：
JavaScript于95年问世，在前 10 个年头执行速度确实不快。在08年，浏览器市场竞争激烈，打响“性能大战”，浏览器厂商纷纷引入了 Just-in-time 编译器，也叫 JIT模式，JS的执行速度快了10倍，JS也终于应用到了新的领域，比如后端开发nodejs。

注：
- JIT编译（just-in-time compilation）狭义来说是当某段代码即将第一次被执行时进行编译，因而叫“即时编译”。JIT编译是动态编译的一种特例。JIT编译一词后来被泛化，时常与动态编译等价。
- 动态编译（dynamic compilation）指的是“在运行时进行编译”；与之相对的是事前编译（ahead-of-time compilation，简称AOT），也叫静态编译（static compilation）。

JS没有静态变量类型，大大降低了效率：
- **js代码在引擎中的执行过程：**需要首先被下载，然后进入parser转成AST（抽象语法树），然后根据AST，Bytecode Compiler（字节码编译器）会生成引擎可识别的bytecode（字节码），最后字节码进入翻译器翻译成 Machine Code（机器码）。
- **效率为啥低：**引擎会对执行次数较多的function进行优化，将其编译成Machine Code后打包送到顶部的 JIT Compiler，下次再执行这个function，就会直接执行编译好的Machine Code。但是由于JS的动态变量，类型变化后上一次所做的优化就失效了只能丢弃，再一次进行优化，因此效率低。

### Asm.js出现

为了解决js低性能问题，asm.js诞生了，它是WebAssembly的前身，是JavaScript的严格子集。Asm.js也不是给开发者手写的，也是一个编译目标。
- Asm.js 为了解决JS的两个低性能问题而设计的：它的变量一律都是`静态类型，`并且`取消垃圾回收`机制。
    - Asm.js只提供两种数据类型：整数和浮点数，其他类型均不提供，其他类型均以数值的形式存在。Asm.js 要求事先声明类型且不得改变，这样就节省了类型判断的时间。asm.js的类型声明有固定写法，`变量 | 0`表示整数，`+变量`表示浮点数。
    - asm.js 没有垃圾回收机制，所有内存操作都由程序员自己控制。
```js
var a = 1;

var x = a | 0;  // x 是32位整数
var y = +a;  // y 是64位浮点数
```
- Asm.js不能解决所有的问题：
    - asm.js 始终逃不过要经过Parser，要经过ByteCode Compiler，而这两步是JavaScript代码在引擎执行过程当中消耗时间最多的两步。而WebAssembly不用经过这两步，直接就是bytecode（字节码）。这就是WebAssembly比asm.js更快的原因。
    - asm.js只有Mozzila支持，而WebAssembly是Mozzila、Google、Microsoft、Apple以及一些其他组织拟联手制定的游戏规则，是业界大佬的统一规范。

在此背景之下，15年，我们迎来了WebAssembly。WebAssembly是经过编译器编译之后的代码，体积小、起步快。在语法上完全脱离JavaScript，同时具有沙盒化的执行环境，成为一个相对独立的编译器目标语言，这样可以不必为了本地代码的运行，而在JS中引入太多内容，**将来Wasm和JS会是分工合作的关系**。

## WebAssembly的意义
WebAssembly并没有要替代JavaScript的意思，而是互为补充的。总结下来就两个点：

- 给了Web更好的性能。WebAssembly是asm.js的性能的2~6倍；
- 给了Web更多的可能。随着WebAssembly的技术越来越成熟，势必会有更多的应用，从Desktop被搬到Web上，这会使本来已经十分强大的Web更加丰富和强大。

## WebAssembly的实操（只作为参考示例）
必须要安装 编译器Emscripten。

WebAssembly在Node中的应用：
```js
const fs = require('fs');
let src = new Uint8Array(fs.readFileSync('./test.wasm'));
const env = {
	memoryBase: 0,
	tableBase: 0,
	memory: new WebAssembly.Memory({
		initial: 256
	}),
	table: new WebAssembly.Table({
		initial: 2,
		element: 'anyfunc'
	}),
	abort: () => {throw 'abort';}
}
WebAssembly.instantiate(src, {env: env})
.then(result => {
	console.log(result.instance.exports._add(20, 89));
})
.catch(e => console.log(e));
```

WebAssembly在React当中的应用:
```js
const fibonacciUrl = './fibonacci.wasm';
const {_fibonacci} = await this.getExportFunction(fibonacciUrl);
```
```js
getExportFunction = async (url) => {
    const env = {
      memoryBase: 0,
      tableBase: 0,
      memory: new WebAssembly.Memory({
        initial: 256
      }),
      table: new WebAssembly.Table({
        initial: 2,
        element: 'anyfunc'
      })
    };
    const instance = await fetch(url).then((response) => {
      return response.arrayBuffer();
    }).then((bytes) => {
      return WebAssembly.instantiate(bytes, {env: env})
    }).then((instance) => {
      return instance.instance.exports;
    });
    return instance;
};
```
通过import C文件来调用:
```js
import wasmC from './add.c';

wasmC({
  'global': {},
  'env': {
    'memoryBase': 0,
    'tableBase': 0,
    'memory': new WebAssembly.Memory({initial: 256}),
    'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
  }
}).then(result => {
  const exports = result.instance.exports;
  const add = exports._add;
  const fibonacci = exports._fibonacci;
  console.log('C return value was', add(2, 5643));
  console.log('Fibonacci', fibonacci(2));
});
```
### 参考文章

[WebAssembly完全入门——了解wasm的前世今身](https://juejin.im/post/5be293daf265da616c65157e)
[WebAssembly学习(一)：认识WebAssembly](https://www.cnblogs.com/jixiaohua/p/10425805.html)
[asm.js 和 Emscripten 入门教程 —— 阮一峰](http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html)
[好玩的WebAssembly](https://www.jianshu.com/p/6b774fb2a345)
