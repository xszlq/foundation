function add(x) {
    return function (y) {
        return x + y;
    }
}

// add10就是一个闭包
var add10 = add(10);

console.log(add10(5));

// 模拟私有变量和方法
var Counter = (function(){
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
})();