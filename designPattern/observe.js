class Observe{
    constructor(){
        this.observeObj = {};
    }

    // 订阅
    subscribe(topic, fn){
        // 多个订阅者
        if(this.observeObj[topic]){
            this.observeObj[topic].push(fn);
        }
        // 第一个订阅者
        else{
            this.observeObj[topic] = [fn];
        }
    }
    
    // 退订
    unsubscribe(topic){
        delete this.observeObj[topic];
    }
    
    // 发布
    publish(topic, param){
        if(this.observeObj[topic]){
            this.observeObj[topic].forEach((fn)=>fn(param));
        }else{
            console.log("主题不存在");
        }
    }
}

let observes = new Observe();

observes.subscribe("buy", (sth)=>{
    console.log("customer1 buy " + sth);
});

observes.subscribe("buy", (sth)=>{
    console.log("customer2 buy " + sth);
});

observes.publish("buy", "books");

observes.unsubscribe("buy");

observes.publish("buy", "books");

// 或者用模块模式实现
