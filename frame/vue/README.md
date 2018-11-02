vue目录
## 学习动机及与react对比
目前多点的cabin项目集成了vue，虽然有点鄙视vue，不过看到github的start数已经赶超react，而且骏哥也让我有时间在cabin中集成react，故先学习一下vue，然后借鉴一下cabin集成vue的方式。

## 官方文档学习
学习的是2.x的文档
### helloWorld目录
对应官方文档的介绍章节，算是入门教程。

### VueInstance
对应Vue实例章节
### 创建一个Vue实例
```
var data = {a:1};
var vm = new Vue({
    el: "#id1"
    data
})
```
### 数据和方法
1. 注意：只有当实例被创建时 data 中存在的属性才是响应式的
2. 使用了Object.freeze vue则无法响应数据的变化
3. Vue实例提供了一下常用方法，可以参考API
### 实例生命周期钩子
1. 不要在选项属性或者回调上使用箭头函数
2. 几个重要的生命周期函数
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

### 模板语法


### 组件基础
#### 基本示例
```
// 一个简单的counter组件，值得注意的是组件的data必须传函数类型，传入obj类型程序也不会报错也是尴尬。。。官方的解释是不然组件实例的数据会相互影响
Vue.component('Counter', {
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">clicked count times</button>'
})
```

#### 组件的复用
- 组件可以多次使用

#### 通过props向子组件传递数据

### 深入了解组件
#### 组件注册
1. 组件名
    一种是kabab-case(短横线分割命名)，一种是PascalCase（驼峰式命名），不过在DOM中只有kabab-case是生效的。
2. 全局注册
```
Vue.component('my-component1', {
    ...
})
```
3. 局部注册
```
// 通过一个普通的js对象来定义组件
var ComponentA = { /* ... */};
// 然后在component是选项中定义你想要使用的组件
new Vue({
  el: '#app'
  components: {
    'component-a': ComponentA,
  }
})
```
注意局部注册的组件在其子组件中不可用。例如，如果你希望 ComponentA 在 ComponentB 中可用，则你需要这样写：
```
var ComponentA = {  }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```