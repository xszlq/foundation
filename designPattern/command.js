let woman = {
    // 购物
    buy(){
      console.log("buy");
    },
    // 骑车
    ride(){
        console.log("ride");
    },
    execute(command){
        woman[command]();
    }
};

woman.execute("buy");

// 用命令模式实现一个包含加减命令的功能，其中命令可以撤销
let baseVal = 0;

class Command{
    constructor(doFn, unDoFn){
        this.command = doFn;
        this.cancelCommand = unDoFn;
    }

    // 执行命令
    exe(){
        this.command();
    }
    // 撤销命令
    undo(){
        this.cancelCommand();
    }
}

const add = function(v){
    return function(){
        baseVal+=v;
        return baseVal;
    }
};

const reduce = function(v){
    return function(){
        baseVal-=v;
        return baseVal;
    }
};

const commandAdd3 = new Command(add(3), reduce(3));
const commandReduce2 = new Command(reduce(2), add(2));

commandAdd3.exe();
commandReduce2.exe();
commandAdd3.undo();
console.log(baseVal);


/*
 *  以上就是一个简单的命令模式，不过明显通过execute去调用方法不如woman.buy调用简单。
 *  命令模式一般用于一些复杂的设计，可以看这个列子 http://www.cnblogs.com/bfwbfw/p/7703873.html
 *  主要利用array实现了一个命令队列，并用一个index表示当前执行到哪个命令，这样很容易实现命令的回退和前进
*/
