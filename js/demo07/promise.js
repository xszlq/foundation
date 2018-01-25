// 基本使用
let promise1 = new Promise((resolv, reject)=>{
    setTimeout(()=>{
        resolv("success");
       // reject("sth error");
    }, 1000)
});

promise1.then((result)=>{
    console.log(result);
}, (error)=>{
    console.log(error);
});

console.log('Hi!'); // 先log Hi 再log success

// Promise.prototype.catch
// 捕获reject和运行时出错

let promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("success")
    }, 1000)
});

promise2.then((success)=>{
    console.log(success);
    throw new Error("err test");
}).catch((error)=>{
    console.log(error);
})

// Promise.all()
const getJSON = (url)=>{
    return new Promise((resolve, reject)=>{
        $.get(url).then(result => resolve(result));
    })
};

// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
    // ...
}).catch(function(reason){
    // ...
});

// Promise.race() 和all方法类似 只是all是所有状态都成功了，再包装成一个新的Promise实例，
// 而race是有一个状态改变了，就包装成一个新的Promise实例

// Promise.resolve()
let p3 = Promise.resolve("success");
// 等同于
let p4 = new Promise((resolve, reject)=>{
    resolve("success");
});