/**
 * Created by LiuQiang on 2018/1/23.
 */

// 数组浅复制
var arr1 = [1,3,5];

var copy = arr1.concat();
console.log(copy); // [1,3,5]

var arr2 = [{name: "lqg"}];

var copy2 = arr2.slice();

arr2[0].name = "z3";

console.log(copy2[0].name); // z3

// 数组的深拷贝 可以借助lodash的cloneDeep实现 或者递归调用浅复制

/**
 * 数组去重
 */
function deleteRepeat(arr){
    return arr.filter((item,index) => index === arr.indexOf(item))
}

console.log(deleteRepeat([1, 2,1,3,5,3])); // [1,2,3,5]

