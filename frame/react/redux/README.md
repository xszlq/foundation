react redux目录
## begin to use redux
之前项目一直没有使用第三方的状态管理库，都是靠自己封装的那一套，虽然比较简陋，不过还是好用的。不过客如云这边在使用，故学习之。学习路径主要还是看官网的api和介绍。
还是那句话：状态管理的本质是状态的同步，不管是用redux还是结合react-redux都提供了api获取到状态树。不过redux当然不仅仅可以作为一个状态管理库来使用，还顺带的组织了我们的代码结构，还有就是它的一些高级用法也还是不错的。
这里主要学习写一些核心概念和高级用法。

## action reducer store 数据流
action 描述一些用户行为等动作，主要由常量（action name）和action创建函数构成
reducer 接收action并处理返回新的state并通知store
store 将所有状态连接起来，并生成状态树。
数据流：store->dispatch(action)->reducer->生成新的state树

## middleware
官方文档花了比较大的篇幅来介绍middleware，从middleware 的产生需求到一步步优化都做了详细介绍，也值得学习，下面以日志需求为例来讲解。
追踪应用的状态变化并实时的打印到控制台
### 封装dispatch
初步实现：封装dispatch
```
const dispatchAndLog = function(action， store){
    console.log("dispatch ", action);
    store.dispatch(action);
    console.log(store.getState());
}

// 替换原来的 dispatch
dispatchAndLog(store, addTodo('Use Redux'))
```
上面的方式有个问题就是每个使用的地方都需要导入dispatchAndLog函数，使用的地方也要相应修改。

### Monkeypatching Dispatch
```
let next = store.dispatch;
store.dispatch = function(action){
    console.log("dispatch ", action);
    let result = next(action);
    console.log(store.getState());
    return result;
}
```
上面这种方式有个问题：如果有不止log一个需求的时候，就没法实现了。

### 隐藏 Monkeypatching
为什么要改写dispatch函数呢？在函数中返回新的dispatch?
```
function logger(store){
    let next = store.dispatch;

    return function(action){
         console.log("dispatch ", action);
         let result = next(action);
         console.log(store.getState());
         return result;
    }
}

function applyMiddlewareByMonkeypatching(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  // 在每一个 middleware 中变换 dispatch 方法。
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store)
  )
}

// 使用
applyMiddlewareByMonkeypatching(store, [ logger ])；
```
上面的代码有多个需求时能同时生效？比如能同时打印日志和异常监控？？我的理解store.dispatch最终只能赋一个值吧？so，为啥要改写dispatch函数呢？

### 移除 Monkeypatching
