/**
 * Created by LiuQiang on 2018/3/18.
 */
class Chain{
    constructor(fn){
        this.fn = fn;
        this.nextNode = null;
    }

    setNextNode(nextNode){
        this.nextNode = nextNode;
    }

    passRequest(){
        const ret = this.fn.apply(this,arguments);
        if(ret === "nextNode"){
            return this.next();
        }

        return ret;
    }

    next(){
        return this.nextNode && this.nextNode.passRequest.apply(this.nextNode, arguments);
    }
}

function fn1(){
    console.log(1);
    return "nextNode";
}

function fn2(){
    const self = this;
    setTimeout(function(){
        console.log("async fun2 execute");
        self.next();
    }, 1000)
}

function fn3(){
    console.log("fn3 execute, and end");
}

const chain1 = new Chain(fn1),
    chain2 = new Chain(fn2),
    chain3 = new Chain(fn3);

chain1.setNextNode(chain2);
chain2.setNextNode(chain3);

chain1.passRequest();

// 上面的版本是一个异步的实现，下面是一个更简洁的实现版本
'use strict';
class Handler {
    constructor() {
    }
    HandleRequest() {
    }
}

class ConcreteHandler1 extends Handler {
    constructor() {
        super();
        console.log('ConcreteHandler1 created')
    }

    setSuccessor (successor) {
        this.successor = successor
    }

    HandleRequest(request) {
        if (request === 'run')
            console.log('ConcreteHandler1 has handled the request')
        else {
            console.log('ConcreteHandler1 calls his successor')
            this.successor.HandleRequest(request)
        }
    }
}

class ConcreteHandler2 extends Handler {
    constructor() {
        super()
        console.log('ConcreteHandler2 created')
    }

    HandleRequest(request) {
        console.log('ConcreteHandler2 has handled the request')
    }
}

function init_ChainofResponsibility() {
    let handle1 = new ConcreteHandler1();
    let handle2 = new ConcreteHandler2();
    handle1.setSuccessor(handle2)
    handle1.HandleRequest('run')
    handle1.HandleRequest('stay')
}

init_ChainofResponsibility();