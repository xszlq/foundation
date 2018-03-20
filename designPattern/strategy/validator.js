const strategy = {
    // 空检验
    isNotEmpty: function(value,errorMsg) {
        if(value === '') {
            return errorMsg;
        }
    },
    // 限制最小长度
    minLength: function(value,errorMsg) {
        if(value.length < 6) {
            return errorMsg;
        }
    },
};

class Validator{
    constructor(){
        // 校验规则
        this.cache = [];
    }

    // 新增校验规则
    add(rule, value, errorMsg){
        this.cache.push(function(){
            return strategy[rule](value, errorMsg);
        });
    }

    // 开始校验
    start(){
        let fun;
        for(let i=0; i<this.cache.length; i++){
            fun = this.cache[i];
            let msg = fun();
            if(msg){
                return msg;
            }
        }
    }
}

let ins = new Validator();

ins.add("isNotEmpty", '23', "用户名不能为空");
ins.add("minLength", "123", "最小长度为6");

console.log(ins.start());
