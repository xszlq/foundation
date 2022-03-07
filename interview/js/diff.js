/*
 虚拟dom patch过程核心是diff算法
 参照vue diff实现
 思路：1.判断是否是第一次渲染，是则直接创建节点
    2.判断节点是否相同（同级比较），如果为同一节点走patchVnode,不是则直接创建新的dom节点
    3.判断是否有children，有则调用updateChildren 判断哪些节点直接复用之前的、新增节点、删除废弃节点
    4.双向指针 头头比较、尾尾比较、头尾比较、尾头比较
    5.如果都不相同则说明无法复用，判断新节点是否有key值，并且旧节点对应的key是否存在，
    6.不存在创建节点。存在在判断是否为同一节点，是则复用，不是则创建
 */

function patch(oldVnode, vnode,  ){
    const insertedVnodeQueue = []

    if(isUndef(oldVnode)){
        // 第一次渲染
        createEle(vnode);
    }else{
        // 同一个节点 进行patchVnode
        if(sameVnode(oldVnode, vnode)){
            patchVnode(oldVnode, vnode, insertedVnodeQueue)
        }else{
            createEle(vnode);
        }
    }
}

function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray){
    const oldCh = oldVnode.children;
    const ch = vnode.children;

    const elm = vnode.elm = oldVnode.elm;

    if(oldCh && ch){
        updateChildren(elm, oldCh, ch)
    }
}

function updateChildren(parentElm, oldCh, newCh){
    // 双向指针对比
    let oSI = 0; // old start index
    let nSI = 0;
    let oEI = oldCh.length - 1; // old end index
    let oSV = oldCh[0]; // old start vnode
    let oEV = oldCh[oEI]; // old End vnode
    let nEI = newCh.length - 1;
    let nSV = newCh[0];
    let nEV = newCh[nEI];

    let vnodeToMove, idxInOld;

    while(oSI<=oEI && nSI <= nEI){
        if(isUndef(oSV)){
            oSV = oldCh[++oSI];
        }else if(isUndef(oEV)){
            oEV = oldCh[--oEI]
        }
        // 头部相同
        else if(sameVnode(oSV, nSV)){
            // 直接复用之前实例
            nSV.componentInstance = oSV.componentInstance;
            oSV = oldCh[++oSI];
            nSV = newCh[++nSI];
        }
        // 旧尾和新尾相同
        else if(sameVnode(oEV, nEV)){
            // 直接复用之前实例
            oEV.componentInstance = nEV.componentInstance;
            oEV = oldCh[--oEI];
            nEV = newCh[--nEI];
        }
        // 旧头和新尾比较
        else if(sameVnode(oSV, nEV)){
            // 直接复用之前实例
            nSV.componentInstance = oSV.componentInstance;
            // todo
        }
        // todo 还有 旧尾和新头比较
        else{
            vnodeToMove = oldCh[idxInOld];

            // todo 通过key来查找是否有相同节点 有就复用，没有就新创建节点

        }
    }
}

function sameVnode(a, b){
    return (
        a.key === b.key &&
        a.asyncFactory === b.asyncFactory && (
            (
                a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)
            ) || (
                isTrue(a.isAsyncPlaceholder) &&
                isUndef(b.asyncFactory.error)
            )
        )
    )
}

function isUndef(){

}
