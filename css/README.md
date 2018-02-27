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

## css重排与重绘
- 重绘是一个元素的外观变化所引起的浏览器行为（常见的就是改变某个元素的css改变引起其他元素的位置样式改变）
- 重排是指DOM树重新计算的行为（例如插入DOM）
