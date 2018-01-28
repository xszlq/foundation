/**
 * Created by LiuQiang on 2018/1/27.
 */
/*
    基本使用
 */
function time(time, value){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(value)
        }, time)
    })
}

function t2(time, value){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(value)
        }, time)
    })
}

function f2(){
    return "f2"
}

async function fun1(){
    // 一般是p2依赖p1值的场景
    let p1 = await time(500, 'success');
    let p2 = await t2(500, p1);
    // await 等待的不是Promise对象的场景，返回值本身
    let p3 = await f2();
    console.log(p1, p2, p3);

    console.log("hello");
}

//fun1(); // log success success hello

/*
  重写promise链
 */

// promise链 伪代码
function pseudoCode(){
    return promise3()
        .then(result => promise4(result))
        .then(result => promise5(result))
        .then(result => promise6(result))
}

// async实现promise链 伪代码
async function pseudoAsync(){
    let result1 = await promise4();
    let result2 = await promise5(result1);

    return promise6(result2);
}

/*
 多个await函数的处理方式
 如果多个promise对象不是相互依赖的，可以用Promise.all
 */

// 伪代码
async function somePromise(){
    let [r1, r2] = await Promise.all([promise4(), promise5()]);
    console.log(r1, r2);
}