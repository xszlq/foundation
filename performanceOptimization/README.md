前端性能优化目录  
目前项目中遇到前端性能问题主要表现在首页的加载时间上，主要从下面几个方面进行了优化
- 减少http请求数（合并资源（将模板转换为js））
- 减少首页加载资源大小（压缩资源、缓存第三方）
在网上看到一篇前端性能优化的三个维度[性能优化](https://www.jianshu.com/p/a5d9938ed60f)
- 静态资源优化（合并压缩css、js，制作雪碧图：减少http的请求次数，节省网络请求时间、缓存第三方、按需加载、开启Gzip）
- 接口访问优化 (服务端渲染)
- 页面渲染速度（采用节流、防抖函数处理高频动作，减少页面重排（批量操作DOM））

