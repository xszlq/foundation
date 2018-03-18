/**
 * Created by LiuQiang on 2018/3/18.
 */
class Person{
    constructor(name){
        this.name = name;
    }
}

// 创建单例的方法
function createSingleton(){
    let instance;

    return function(name){
        if(!instance){
            instance = new Person(name);
        }
        return instance;
    }
}

let create = createSingleton();

const ins1 = create("小明");
const ins2 = create("小强");

console.log(ins1.name, ins2.name);