function C(){
}
C.prototype = {
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    }
};

function B(){
}

B.prototype = new C();

B.prototype.getAge = function () {
    return this.age;
};

function A(){
}

A.prototype = new B();

A.prototype.getSex = function () {
    return this.sex;
};

var ins1 = new A();

ins1.setName("lqg");

console.log(ins1.getName());