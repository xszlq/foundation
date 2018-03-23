// 声明
let set1 = new Set([1,2,3,2,4]);

/*
    遍历
 */
for(let i of set1.keys()){
    console.log(i);
}

set1.forEach((item)=>{
    console.log(item);
});

/*
    api的使用 add delete has clear
 */
let api = new Set();
api.add(1);
api.add(2);
console.log(api.has(1));

api.delete(1);
console.log(api.has(1));

console.log(api);

api.clear();
console.log(api);





