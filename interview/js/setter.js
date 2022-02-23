let setter = function (conten, key, value) {
    // your code
    let keys = key.split('.');

    let len = 0;
    let cur = conten;

    while(true){
        let curKey = keys[len];
        if(!cur[curKey]){
            throw '入参有误'
        }
        if(len === keys.length - 1){
            cur[curKey] = value;
            break;
        }
        len++;
        cur = cur[curKey];
    }

};
let n = {
    a: {
        b: {
            c: { d: 1 },
            bx: { y: 1 },
        },
        ax: { y: 1 },
    },
};
// 修改值
setter(n, "a.b.c.d", 3);
console.log(n.a.b.c.d); //3
setter(n, "a.b.bx", 1);
console.log(n.a.b.bx); //1
