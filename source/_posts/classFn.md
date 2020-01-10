---
title: ES6的类 与 ES5的构造函数
date: 2020-01-06 14:40:35
tags: ES6 原型链 类与继承
---

> 本文主要记录 ES6中类的关键点，与ES5的构造函数做比较，并说明各种方法定义的区别。

<!-- more -->

## ES6 Class的基本知识点

[ES6手册：Class](http://es6.ruanyifeng.com/#docs/class)

JS中，生成实例对象的传统方法是通过构造函数，但与其他面向对象语言差异很大，故ES6引入了 Class（类），作为对象的模板，来定义类。Class只是构造函数的语法糖。

### Class与构造函数的异同：
- ES5 的构造函数Fn，对应 ES6 的Fn类的构造方法：类里面有一个constructor方法，这就是类的构造方法，而this关键字则代表实例对象。
- 类的所有方法都定义在类的prototype属性上面（其实就是构造函数中的prototype属性）。在类的实例上面调用方法，其实就是调用原型上的方法。
- 与 ES5 不同，类的内部所有定义的方法，都是不可枚举的（non-enumerable）:
```js
class Point {
  constructor(x, y) {
    // ...
  }
  toString() {
    // ...
  }
}

Object.keys(Point.prototype) // []
Object.getOwnPropertyNames(Point.prototype) // ["constructor","toString"]

****************************************************************

var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype) // ["toString"]
Object.getOwnPropertyNames(Point.prototype) // ["constructor","toString"]
```
- 与 ES5 不同，类不存在变量提升(hoist)，不会把类声明提升到代码头部，这与“继承”有关，必须保证子类在父类之后定义；
- 类和模块的内部，默认就是严格模式，ES6实际上把整个语言升级到了严格模式；

### 其他知识点

- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。constructor方法默认返回实例对象（即this）。
- 类方法内部的this，默认指向类的实例。单独使用该方法，很可能报错（比如解构出来单独使用，因为默认是严格模式，则this指向为undefined），有3种解决方法：
    - 在构造方法constructor中绑定this，this.printName = this.printName.bind(this);
    - 使用箭头函数；
    - 使用Proxy，获取方法的时候，自动绑定this。
- 静态方法：类相当于实例的原型，所有在类中定义的方法都是原型方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
    - 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例；
    - 父类的静态方法，可以被子类继承。
- 静态属性：静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的实例属性。ES6 明确规定，Class 内部只有静态方法，没有静态属性，故要添加静态属性，只能如下写法（不考虑新提案情况）：
```js
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```
- 实例属性的新写法：实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。
- 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。ES6没有提供，只能通过：
    - _fn 命名表示私有方法，但其实类的外部还是可以访问；
    - 将私有方法移出模块；
    - 使用Symbol值的唯一性。
- ES6 为new命令引入了一个new.target属性，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
- 类的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
- 类的属性名，可以使用属性表达式；
- 与函数一样，类也可以使用表达式的形式定义；

### 对应讲下，ES5中的各类方法优先级

各类方法的优先级：**实例方法 > 构造函数(this)方法 > 原型方法 > 构造函数上追加的静态方法（报错，实例取不到）**
```js
function Foo() {
    this.hello = function() {
        // 通过this定义在构造函数上
        console.log('this')
    }
}

Foo.hello = function() {
    // 构造函数外部追加的静态方法，实例取不到，会报错
    console.log('static function')
}

Foo.prototype.hello = function() {
    // 定义在原型对象上的方法
    console.log('prototype function')
}

let foo = new Foo() // 创建实例

foo.hello = function() {
    // 实例方法
    console.log('instance function')
}

foo.hello()
// 按优先级可输出：
// instance function
// this
// prototype function
// 报错：foo.hello is not a function
```

