function Parent(age, name){
    this.age = age;
    this.name = name;
    this.getAge = function(){
        return this.age;
    }
}

Parent.prototype = {
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
        return this;
    }
};

function Child(age, name, birthDay) {
    Parent.call(this, age, name);
    this.birthDay = birthDay;
}

Child.prototype = new Parent;
Child.prototype.constructor = Child;

var ins1 = new Child(12, 'lqg', '1992');

console.log(ins1.name); // lqg

console.log(Parent instanceof Object);

