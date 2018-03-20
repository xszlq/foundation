class Context{
    constructor(type){
        switch (type){
            case "A":
                this.strategy = new StrategyA();
                break;
            case "B":
                this.strategy = new StrategyB();
                break;
            case "C":
                this.strategy = new StrategyC();
                break;

            default:
                this.strategy = new StrategyA();
                break;
        }
    }

    ContextInterface(){
        // 算法接口实现
        this.strategy.AlgorithmInterface();
    }
}

class Strategy{
    // 算法接口
    AlgorithmInterface(){
        console.log("接口未实现")
    }
}

class StrategyA extends Strategy{
    AlgorithmInterface(){
        console.log("算法A实现");
    }
}

class StrategyB extends Strategy{
    AlgorithmInterface(){
        console.log("算法B实现");
    }
}


class StrategyC extends Strategy{
    AlgorithmInterface(){
        console.log("算法C实现");
    }
}

let sA = new Context("A");
sA.ContextInterface();

let sC = new Context("C");
sC.ContextInterface();