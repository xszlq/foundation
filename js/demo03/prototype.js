function C(){
    this.c ="c";
}
C.prototype = {
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    }
};

C.prototype.constructor = C;

function B(){
    this.b = "b";
}

B.prototype = new C();

B.prototype.getAge = function () {
    return this.age;
};

B.prototype.constructor = B;

function A(){
}

A.prototype = new B();

A.prototype.getSex = function () {
    return this.sex;
};

var ins1 = new A();

// ins1找到setName的过程就是访问原型链的过程
ins1.setName("lqg");

console.log(ins1.getName());