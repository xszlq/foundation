/*
    数组去重
 */
const a1 = [1, 1, 2, 3, 3, 5];

console.log([...new Set(a1)]);

// 1. set 实例属性 & 方法
const s1 = new Set();

const obj = { obj: "obj1" };

s1.add(1);
s1.add(2);
s1.add(1);
s1.add(obj);

console.log(s1.size); // 3

s1.delete(2);

console.log(s1.size); // 2

// 2. 遍历set
for (let i of s1) {
  console.log(i);
}
