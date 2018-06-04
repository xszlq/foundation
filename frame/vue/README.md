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

