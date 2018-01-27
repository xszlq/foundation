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

function t2(time){
    setTimeout(()=>{
       return "time2"
    }, time)
}

async function fun1(){
    let p1 = await time(500, 'success');
    let p2 = await t2(500);
    console.log(p1, p2);

    console.log("hello");
}

fun1();
