/**
 * Created by LiuQiang on 2018/1/27.
 */
let a = Symbol();
let b = Symbol();

console.log(a === b);

let obj1 = {
    a: "a"
};
obj1[a] = "xxx";
obj1[b] = "yyy";

console.log(obj1[a]);
