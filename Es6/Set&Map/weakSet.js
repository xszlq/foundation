const b = {a: 23},
        c = {};
const ws = new WeakSet();
ws.add(b);
ws.add(c);

console.log(ws.has(b));