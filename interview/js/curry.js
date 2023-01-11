// 1.最开始实现
function currey(fn) {
  const argLen = fn.length;
  let args = [];

  return function _currey() {
    args.push(...Array.from(arguments));

    if (args.length >= argLen) {
      return fn.apply(this, args);
    } else {
      return _currey;
    }
  };
}

let _fn = currey(function (a, b, c, d, e) {
  console.log(a, b, c, d, e);
});

_fn(1, 2, 3, 4, 5);
// _fn(1)(2)(3, 4, 5);

// 2. 上面的实现存在一个问题：22行调用会报错，因为闭包缓存了入参fn和所有参数，再执行函数后args没有释放，所以需要还需要一个闭包来缓存调用参数，需要修改else实现

// 3. 目标要实现21行和22行两种方式都能正常调用传入函数，修改_currey 函数的else实现

// 4. 新实现
function curry(fn) {
  return function _curry(...arg) {
    if (arg.length >= fn.length) {
      return fn.apply(this, arg);
    } else {
      return function (...arg2) {
        return _curry.apply(this, arg.concat(arg2));
      };
    }
  };
}

let _fn2 = curry(function (a, b, c, d, e) {
  console.log(a, b, c, d, e);
});

_fn2(2, 3, 4, 5, 6);
_fn2(2)(3)(4, 5, 6);
