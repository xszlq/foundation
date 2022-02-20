/**
 * 实现Promise和Promise.all
 * 实现思路：
 * 1.存储then执行队列
 * 2.用setTimeout 让resolve变成异步执行
 * 3.加入状态 有pending、fulfilled、rejected三状态，默认为pending状态，调用resolve后状态改为fulfilled
 */
class MyPromise{
  callBacks = [];
  state = 'pending';
  value = null;
  constructor(fn){
    fn(this._resolve.bind(this))
  }

  then(onFulfilled){
    if(this.state === 'pending'){
      this.callBacks.push(onFulfilled);
    }

    if(this.state === 'fulfilled'){
      onFulfilled(this.value)
    }

    return this;
  }

  _resolve(v){
    setTimeout(()=>{
      this.state = 'fulfilled';
      this.value = v;
      this.callBacks.forEach(fn=>{
        this.value = fn(this.value)
      })
    })
  }
}


let p1 = new MyPromise(function(resolve){
  setTimeout(()=>{
    resolve(1);
  }, 1000)
});

let p2 = new MyPromise(function(resolve){
  resolve(2)
})



MyPromise.all = function(promiseList){
  let results = [];

  return new MyPromise(function(resolve){
    promiseList.forEach(i=>{
      i.then(res=>{
        results.push(res)

        if(results.length === promiseList.length){
          resolve(results)
        }
      })
    })
  })
}

MyPromise.all([p1,p2]).then(function(res){
  console.log('res', res)
})


