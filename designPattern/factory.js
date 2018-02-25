/**
 * Created by LiuQiang on 2018/2/25.
 */
class CarFactory{
    drive(){
        console.log("drive")
    }

    static factory(type){
        return new CarFactory[type]();
    }
}

CarFactory.Bus = class extends CarFactory{
    constructor(){
        super();
        console.log("bus");
    }
};

CarFactory.factory("Bus").drive();