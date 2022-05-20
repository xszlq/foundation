// for in 循环不会访问key值为 Symbol
// hasOwnProperty 访问不到继承属性 但是可以访问key为symbol的属性

Object.prototype.map = function(cb){
    for(let i in this){
        cb(i, this[i])
    }
}

let obj = {
    a: 1,
    b: 2,
}

let s1 =  Symbol();

obj[s1] = 5;

obj.map(function(val, key){
    console.log(val, key);
})