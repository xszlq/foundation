Es6新特性目录
## Set和Map数据结构
- Set实例的属性和方法（size、add、delete、has、clear）
- Set遍历操作
- Map的实例和操作方法（size set get delete has clear）
- Map的遍历(keys,values)

### WeakSet
- 与Set的区别（WeakSet的成员只能是对象;WeakSet中的对象都是弱引用，垃圾回收机制（引用计数）不考虑WeakSet对该对象的引用;不可遍历）

### WeakMap
- 与Map的区别（键名只能是对象;键名所指向的对象，不计入垃圾回收机制）

### 使用场景
- 字符串、数组去重（Set）
- 存储Dom节点（防止内存泄露）（WeakSet）
- 事件绑定
