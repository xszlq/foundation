class Parent{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getAge(){
        return this.age;
    }
}

class Child extends Parent{
    constructor(name, age, birthDay){
        super(name, age);
        this.birthDay = birthDay;
    }
}

let ins1 = new Child("lqg", 18, 1992);

console.log(ins1.age); // 18

