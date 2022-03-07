/**
 * 实现一个sum函数
 * const a = sum(0); // => a === 0
 const b = sum(1)(2); // => b === 3
 const c = sum(4)(5); // c === 9
 const k = sum(n1)...(nk) // k === n1 + n2 + ... + nk
 * */

function sum(num){
    if(!sum.result) sum.result = 0;
    sum.result += num;
    return sum;
}


console.log(sum(0).result)
console.log(sum(1)(2).result)
