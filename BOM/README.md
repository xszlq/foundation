BOM（browser object model）主要包含window、document、location、navigator和screen

## 路由
路由的实现主要有hash、history两种方式。

### hash实现
hash本意是用作锚点的，方便在很长的文档里上下导航。采用hash值的问题就是不太美观，不过实现相对简单。主要就是利用了window自带的hashchange事件。
详见 hash.html

### history实现
h5新增了history.onpopstate事件，监听浏览器路由退后。以及history.pushState()、history.replaceState()两个主要用于添加路由和替换当前路由。
