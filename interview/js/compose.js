// 实现一个compose函数 从后往前依次调用入参函数
/**
 * compose是函数式编程的概念
 * 例如：
function fn1(x) {
    return x + 1;
  }
  function fn2(x) {
    return x + 2;
  }

  const a = compose(fn1, fn2);

  console.log(a(9)); // 9+2+1=12
   */

function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}

function compose(...fns) {
  if (!fns.length) return (v) => v;

  return function (v) {
    return fns.reduce((previousValue, cur) => {
      return cur(previousValue);
    }, v);
  };
}

const a = compose(fn1, fn2);

console.log(a(9));
