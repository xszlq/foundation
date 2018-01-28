/**
 * Created by LiuQiang on 2018/1/27.
 */
/*
    作为属性名
 */
let a = Symbol("x");
let b = Symbol("y");

console.log(a === b);

let obj1 = {
    a: "a"
};
obj1[a] = "xxx";
obj1[b] = "yyy";

console.log(obj1[a]);

/*
    属性名的遍历
 */
// for in 不能遍历到以symbol对象作为的属性名
for(let key in obj1){
    // 只会打印a
    console.log(key);
}
console.log(Object.getOwnPropertySymbols(obj1));

/*
 全局共享的 Symbol Symbol.for()、Symbol.keyFor()
 通过Symbol.for 创建的Symbol是全局使用的，就算跨域了也能访问到
 */
// 可以定义两个相同的Symbol
let s1 = Symbol.for("s1");
let s2 = Symbol.for("s1");
console.log(Symbol.keyFor(s1), s1 === s2); // log s1, true

