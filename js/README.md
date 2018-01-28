这个目录是js

## demo01 js继承（es5实现）
采用的是构造函数、原型混合的继承方式（常用）。
构造函数继承可以实现多重继承，可以解决原型继承无法向父类构造函数传参的问题，但是继承的类没法访问父类原型的属性和方法。  
构造函数继承 父类在原型上新增方法，子类都能访问到，但在创建子类实例的时候无法向父类构造函数传参  
还有实例继承，顾名思义，在子类的构造函数中，返回父类的实例。

## demo02 js继承 （es6实现）
继承es6实现，本质还是构造函数、原型继承。es6有extends关键字使继承关系更加清晰，而且有了constructor方法，理解也更加容易，也让继承的方式更加统一。

## demo03 原型
原型是js的基础，和上面的继承有关系。用个例子来简单说明原型和原型链。  
有三个类，A、B、C他们的关系是A继承B，B继承C。实例化A，实例化后的对象，访问C原型上方法的过程，先找A实例化后的属性、方法，发现没有就找实例上的__propto__ (A的原型)，发现A的原型上没有，就会找B上的原型，发现没有，就会找到C的原型。  如果C原型上还是没找到，就会知道Object的原型为止。这就是原型链。

## demo04 闭包
说到闭包可以从表现形式，作用，性能三个方面考虑。  
demo中主要写了一个常见使用，及用闭包模拟私有方法和变量。性能的话，由于闭包会增大内存开销，能不用的地方，最好不用。例如写一个类，能写到原型的方法，尽量写到原型。

## demo05 Array
### Es5常用方法 
改变数组的有：push（尾部插入，可以同时插入多个元素）、pop（删除数组的最后一个元素）、unshift（在数组开头插入一个或多个元素）、shift（删除第一个元素）、splice（在指定位置删除或者插入元素）；  
上面这些方法都返回最新数组的长度。  
遍历的方法： forEach、map、for of  
不改原数组的方法：forEach、map、concat（合并数组，并返回一个新的数组）、slice（截取数组片段）、reduce、join、indexOf、sort  
其中concat和slice可以实现数组的浅拷贝，深拷贝一般借助第三方库实现
### Es6数组扩展(es6.js主要写展开运算符的运用)
Es6 Array 原型上新增includes、find、findIndex、fill（会改变原数组）方法，Array对象上新增from（将一个类数组转换成一个数组）、of方法   
扩展运算符
这个语法可以替代函数的apply方法。
复制数组

## demo05 String
### Es5常用方法
不改变string的方法：slice、substring、indexOf、replace、match、trim、toUpperCase、toLowerCase

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
主要解决方案有两种
- h5的postMessage (双向通信)
- jsonp （单向通信）主要用于拿数据
