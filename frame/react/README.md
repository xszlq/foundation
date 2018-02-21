react目录
## 谈谈对React框架的一个思考
主要从这个框架的定位和优缺点来说吧。  
首先这个框架只是解决了MVC架构上的V，所以如果要用好这个框架，要么引入第三方库，要么自己封装解决M的问题。而组件的状态就可以理解为M层的数据模型。  
React有虚拟Dom，而且采用了Diff算法，通过与上次的虚拟DOM比较做到只渲染改变的部分，所以在性能上还是很好的，比传统的MVC框架全部渲染好很多。组件模式，利于代码的复用。   
缺点就是学习曲线比较陡峭，要使用React就要使用很多新概念和技术；而且React本身只是DOM的抽象层，使用组件构建虚拟DOM，但大型应用的架构、组件通信问题还得自己解决。

## React组件生命周期
- componentWillMount （组件加载到真实Dom之前执行）
- componentDidMount （组件加载到真实Dom后执行）
- componentWillReceiveProps （组件接受新的参数时使用，没接收到新的参数也会执行）
- shouldComponentUpdate (遇到性能问题时使用，返回false，组件就不会更新了)
- componentWillUpdate （组件在运行时，加载到真实Dom之前执行）
- componentDidUpdate （组件在运行时，加载到真实Dom后执行）
- componentWillUnmount （组件移除前执行）

## 组件通信
组件通信有三种形式，父子组件通信、子父组件通信、兄弟组件通信。而组件通信的实质是状态的同步。  
而React如果要解决组件通信，只能靠传参或者提供的getChildContext方法来传递信息。但如果组件嵌套比较深，或者是解决兄弟组件通信实现起来都不是很方便。  
组件通信问题比较热门的解决方案有Redux和Mobx，Redux比较适合大型的项目，Mobx适合中小型的项目。  
Redux使用起来比较繁杂，整个流程是，dispatch action-> reducer -> new State,redux 维护整个状态树。  
Mobx可以理解为观察者模式的实现，组件是观察者，状态是被观察者。  
项目中的实践，考虑到组件通信的实质是状态的同步，将组件和状态分离，每个组件维护自己的状态，而状态以模块的方式使用。

## events
React对原生的事件进行了封装，events这个目录是对React事件的学习和探索。

## stateless组件
无状态组件和函数使用

## 异步的setState
语法：
```setState(updater[,callback])
```
updater可以是一个函数，也可以是一个对象。  
setState是异步的，官方文档的建议是通过生命周期函数componentDidMount,不过明显不好呀，例如某些场景才触发的，就要在该函数中做一些判断。  
好的解决方案有三种，一种是采用回掉，一种是将updater传入函数，或者封装setState为一个Promise对象,结合async函数提高代码可读性

## 高阶组件
题外话：之前有想过怎么复用一个组件的一些代码，例如我写个组件能否继承另一个组件，但是感觉不太合适。  
最近了解到高阶组件，能解决我的困惑，其实高阶组件就是利用了函数的特性，以组件为入参，返回一个新的组件。高阶组件也是组件嵌套的一种方式。  
高阶组件主要的作用：
- 操作props（增删改读props）
- 提取state
今天在阮一峰老师微博上看到可以用children可以替换hoc，空了对比一下两者的实现