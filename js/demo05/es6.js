/**
 * Created by LiuQiang on 2018/1/23.
 */
// 展开运算符
console.log(0,...[1, 2, 3],4); // 0,1,2,3,4

// 代替函数的apply方法
function f(x, y, z){
    // ...
}

let args = [1,2,3];
f(...args);

// 解决将一个数组添加到另一个数组尾部
let arr1 = [0,1,2],
    arr2 = [3,4,5];

// es5的话
// Array.prototype.push.apply(arr1, arr2);
arr1.push(...arr2); // arr1 [0,1,2,3,4,5]

// 数组的复制
let arr3 = [1,3,5];
// 以下两种都是复制
let arr4 = [...arr3];
let [...arr5] = arr3;

// 合并数组
let arr6 = [0,1,2],
    arr7 = [3,4,5];

let arr8 = [...arr6, ...arr7];

// 余解构赋值结合
let arr9 = [0,1,2];
// es5
//let a= arr9[0], a1 = arr9.slice(1);
// es6
let [a,...a1] = arr9;

console.log(a, a1); // 0, [1,2]
