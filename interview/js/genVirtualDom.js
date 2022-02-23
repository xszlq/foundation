
function Element(tag, attrs, children){
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;
}
// 把真实 dom 转变为虚拟 dom 入参为真实dom
function genVirtualDom(el){
    const {nodeName, childNodes, attributes} = el;
    let children = [];

    const props = {};
    for (const node of attributes) {
        props[node.nodeName] = node.nodeValue
    }

    if(childNodes && childNodes.length>0){
        for(let i=0; i<childNodes.length; i++){
            let cur = childNodes[i];
            // 节点类型
            if(cur.nodeType === 1){
                children.push(genVirtualDom(childNodes[i]))
            }
            // 文本节点
            else if(cur.nodeType === 3){
                children.push(cur.nodeValue);
            }
        }
    }

    return new Element(nodeName, props, children)
}
