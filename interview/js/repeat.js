function repeat(func, times, wait) {

  return function(){
    let countTimes = 0;
    let params = arguments;
    let timer = setInterval(function(){
      countTimes++;
      func(...params)
      if(countTimes === times){
        clearInterval(timer);
      }
    }, wait)
  }
}
const repeatFunc = repeat(console.log, 4, 1000);

// 每过一秒打印一次hello world
repeatFunc('hello world')
