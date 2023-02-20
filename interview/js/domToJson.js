/**
 * 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式 
 * 题目来源: https://juejin.cn/post/6968713283884974088#heading-26
 * 
 *
 * <div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

把上诉dom结构转成下面的JSON格式

{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
 */

function domToJSON(domTree) {
  const obj = {};

  obj.tag = domTree.tagName;
  obj.children = [];

  domTree.childNodes.forEach((i) => {
    obj.children.push(domToJSON(i));
  });

  return obj;
}
