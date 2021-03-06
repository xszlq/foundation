这个目录是js

## demo01 js继承（es5实现）
采用的是构造函数、原型混合的继承方式（常用）。
构造函数继承可以实现多重继承，可以解决原型继承无法向父类构造函数传参的问题，但是继承的类没法访问父类原型的属性和方法。  
原型继承 父类在原型上新增方法，子类都能访问到，但在创建子类实例的时候无法向父类构造函数传参  
还有实例继承，顾名思义，在子类的构造函数中，返回父类的实例。  
主要知识点：
- Es5构造函数继承、原型继承
- Es6继承
- Es5和Es6继承对比

## demo02 js继承 （es6继承其实就是es5继承的语法糖）
继承es6实现，本质还是构造函数、原型继承。es6有extends关键字使继承关系更加清晰，而且有了constructor方法，理解也更加容易，也让继承的方式更加统一。

## demo03 原型、原型链
每个构造函数默认有个prototype对象，即原型。  
每个实例都会有一个__proto__属性，在访问一个实例的属性或者方法时，首先会找自身实例有没有，没有则会访问__proto__属性，如果没找到，则会访问__proto__属性，这样一层一层找的链就是原型链。最终会倒找Object

主要知识点：
- prototype和__proto__ 
每个构造函数默认有个prototype对象，该对象如果不重写，默认只有一个constructor属性并且值为构造函数本身

## demo04 闭包
说到闭包可以从表现形式，作用，性能三个方面考虑。  
demo中主要写了一个常见使用，及用闭包模拟私有方法和变量。性能的话，由于闭包会增大内存开销，能不用的地方，最好不用。例如写一个类，能写到原型的方法，尽量写到原型。  
- 作用域
- 从外部读取局域变量
- 闭包的概念
- 闭包的用途（私有变量、节流、防抖函数、React高阶组件、回掉函数）
- 使用注意事项

## demo05 Array
### Es5常用方法 
改变数组的有：push（尾部插入，可以同时插入多个元素）、pop（删除数组的最后一个元素）、unshift（在数组开头插入一个或多个元素）、shift（删除第一个元素）、splice（在指定位置删除或者插入元素）；  
上面这些方法都返回最新数组的长度。  
遍历的方法： forEach、map、for of  
不改原数组的方法：forEach、map、concat（合并数组，并返回一个新的数组）、slice（截取数组片段）、reduce、join、indexOf、sort  
其中concat和slice可以实现数组的浅拷贝，深拷贝一般借助第三方库实现
- 数组去重（Es5、ES6实现）
### Es6数组扩展(es6.js主要写展开运算符的运用)
Es6 Array 原型上新增includes、find、findIndex、fill（会改变原数组）方法，Array对象上新增from（将一个类数组转换成一个数组）、of方法   
扩展运算符
这个语法可以替代函数的apply方法。
复制数组

## demo06 String
### Es5常用方法
不改变string的方法：slice、substring、indexOf、replace、match、trim、toUpperCase、toLowerCase  
对string的常见考题，例如：
- 判断一个字符串中重复出现了几次指定字符串

### Es6 String 扩展
原型新增includes、startsWith、endsWith、repeat方法


## demo07 异步解决方案
### promise
promise主要解决传统异步回调地狱的问题。主要用在ajax请求，setTimeout，弹框。
主要的知识点有
- Promise.prototype.then()
- Promise.prototype.catch()
- Promise.all()
- Promise.race()
- Promise.resolve()
- Promise.reject()

### async
async的引入主要是为了异步操作更加方便。
主要知识点：
- 基本使用(async、await函数的使用)
- 通过async方法重写 promise 链
- 多个await函数的处理方式
- await函数只能用在async函数中，不能用在普通函数（async中嵌套的函数也不行）

## demo08 Symbol
新的数据类型，主要解决es5对象属性名都是字符串，容易被覆盖的问题。表示独一无二的值。
主要知识点：
- 作为属性名
- 属性名的遍历（Object.getOwnPropertySymbols）
- 全局共享的 Symbol Symbol.for()、Symbol.keyFor()4
- 实例：单例模式

## demo09 跨域
受浏览器同源策略限制，跨域通信默认是不允许的。主要解决方案有两种
- h5的postMessage (双向通信)
- jsonp （单向通信）主要用于拿数据，回掉函数等

## demo10 事件
- 事件的三个阶段
- target和currentTarget的区别
事件的三个阶段是：捕获、目标、冒泡；target和currentTarget在目标阶段是一样的，在捕获和冒泡阶段currentTarget指的是最近的父元素。

## demo11 ajax
项目中的ajax基本都是用的jq封装的，不过还是有必要知道一下其实现
- XMLHttpRequest
- XMLHttpRequest实现一个get请求
- XMLHttpRequest实现一个post请求
- get请求和post请求的异同
- 常见状态码及使用场景
get请求和post请求本质是一样的，都是XMLHttpRequest的实现。  
不同的是，get请求会把请求参数暴露到url中，而且浏览器会对url的大小做限制。post则是将参数放到请求体，大小不受限制而且post支持多种数据格式（form、json、multipart/form-data）  
常见状态码及场景
- 200 正常返回
- 301 永久转移，一般用于域名更换后的重定向，http转到https
- 302 资源暂时转移 短链接跳转到长连接 例如访问我们的17dz默认转到home/index.html
- 400 Bad Request 一般是参数类型不对
- 403 Forbidden 例如访问某个目录，服务器报错，一般服务器只提供访问某个具体的页面
- 404 资源未找到
- 504 GateWay Timeout 超时
[参考文章](https://juejin.im/post/5a757d2f5188254e5c6c404a)

## js中的内存机制
- js中的堆、栈内存
- 内存的生命周期
- js的垃圾回收算法（引用计数（IE）、标记清除）
- 内存泄漏

[参考文章](https://mp.weixin.qq.com/s/op26GEKXEN-yI3IpA9tZQg)

