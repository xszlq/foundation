const o1 = {},
  o2 = {};

const map1 = new Map();

map1.set(o1, "o1");
map1.set(o2, "o2");

console.log(map1.get(o1));

/*
    构造函数
 */
const map2 = new Map([
  [o1, "ao1"],
  [o2, "ao2"],
]);

console.log(map2.get(o2));

// 1.map实例属性和方法
console.log(map2.size);

map2.clear();
console.log(map2.size);

map2.set("a", "valueA");
map2.set("b", "valueB");

// 2.遍历map
for (let i of map2) {
  console.log(i); // ['a', 'valueA'], ['b', 'valueB']
}
