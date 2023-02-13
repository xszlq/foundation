/*
题目描述:手写 call apply bind 实现

考察点：
call、apply区别
this指向调用者
*/

Function.prototype.myCall = function (context, ...args) {
  if (!context) {
    context = window;
  }

  const fn = Symbol();

  // 这里很巧妙 this是函数实例本身就可以调用
  context[fn] = this;

  // 由context[fn]调用 所以this指向context
  return context[fn](...args);
};

Function.prototype.myApply = function (context, args) {
  if (!context) {
    context = window;
  }

  const fn = Symbol();

  // 这里很巧妙 this是函数实例本身就可以调用
  context[fn] = this;

  // 由context[fn]调用 所以this指向context
  return context[fn](args);
};
