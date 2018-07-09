这个目录是css

## demo01
盒子模型

## demo02 垂直居中
absolute.html采用的是绝对定位来解决，这需要top、left、right、bottom值设为0，margin设置为auto，这种方式需要父元素的position设为relative
transform.html 采用的是绝对定位和transform属性设置为translate(-50%, -50%),解决left、top 50%本身宽度和高度的偏移。
flex.html 采用的是flex布局，只需要设置容器节点display为flex，并且设置水平（justify-content）和垂直方向（align-items）对其方式为center

## demo03 常用布局
grail.html 圣杯布局（两边固定，中间自适应）,主要运用float布局特性，占据margin位置实现
flexGrail flex实现圣杯布局，flex项目设置order和flex值

## 重排与重绘
- 重绘是一个元素的外观变化所引起的浏览器行为（常见的就是改变某个元素的css改变引起其他元素的位置样式改变）
- 重排是指DOM树重新计算的行为（例如插入DOM）

### 什么情况会触发重绘和重排
- 增删改dom节点
- 通过 display: none 隐藏一个 DOM 节点-触发重排和重绘
- 通过 display: hidden 隐藏一个DOM节点-只触发重绘
- 移动或者给页面中的DOM节点添加动画
- 添加一个样式表，调整样式属性
- 用户行为，例如调整窗口大小，改变字号，或者滚动

### 优化方案
- 减少逐项更改样式，最好一次性更改style，或者将样式定义为class并一次性更新
- 避免循环操作Dom，一次性将要更改的dom拼装好，一次性修改dom
- 避免多次读取offset等属性。（读取这些属性时，浏览器为了获取正确的值会触发重排）
- 将复杂的元素绝对定位或固定定位，使他脱离文档流，减少重排。

## demo04 文档流分析
- 正常文档流和特殊文档流
- 浮动元素后跟block元素&浮动元素后跟inline元素对布局的影响

## demo05 sass的基本用法
列举一下常用的特性
- 变量
- 函数
- 计算
- 嵌套
- 继承
- Mixin

## demo06 rem布局


[参考文档](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)