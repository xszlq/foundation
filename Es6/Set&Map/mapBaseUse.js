const o1 = {},
    o2 = {};

const map1 = new Map();

map1.set(o1, "o1");
map1.set(o2, "o2");

console.log(map1.get(o1));

/*
    构造函数
 */
const map2 = new Map([[o1, "ao1"], [o2, "ao2"]]);

console.log(map2.get(o2));