// let fun1 = fun.bind(context)
// 实现 bind 方法，不能使用 call、apply、bind. myBind

Function.prototype.myBind = function(context){
    let fn = this;
    let cacheParam = Array.prototype.slice.call(arguments, 1);
    return function (){
        fn.apply(context, [...cacheParam,...arguments]);
    }
}

function test(){
    console.log(arguments);
    console.log(this);
    return;
}

let testObj = {
    a: '22',
}

let fn = test.myBind(testObj, '33');
fn('xxxx');

let fn1 = test.bind(testObj, '33')
fn1('xxxx')
