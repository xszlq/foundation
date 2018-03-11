/**
 * Created by LiuQiang on 2018/3/11.
 */

class Boy{
    constructor(girl){
        this.girl = girl;
    }

    sayLove(){
        console.log("hi " + this.girl.name + "," + "I love you")
    }
}

class Girl{
    constructor(name){
        this.name = name;
    }
}

class Agent{
    constructor(girlIns){
        this.girl = girlIns;
    }

    sayLove(){
        this.boy = new Boy(this.girl);
        this.boy.sayLove();
        //console.log("男孩：" +this.boyIns.name + "对"+"女孩："+ this.girlIns.name + "说他喜欢她");
    }
}
// 上面的实现方式，需要一开始就实例化需要访问的对象，还不够优雅 可以考虑在具体做某个动作的时候再实例化本体对象
var proxy = new Agent(new Girl("小红"));
proxy.sayLove();
