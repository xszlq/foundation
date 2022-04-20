/**
 * 问题记录：
 * 1.+运算符两个都是字符串会报错，需要用字符串concat方法或者加一个空字符串
 * 
 */

// 1.使用类型注解
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

// 2. 使用接口
interface User{
    name: String,
    age: Number
}

function printPersion(user: User){
    console.log(user.name);
    console.log(user.age);
}

printPersion({name: 'zhang3', age: 35});

// 3.使用类
class Person{
    public fullName: String;
    constructor(public firstName:String, public lastName:String){
        this.fullName = firstName + " "  + lastName;
    }
    getFirstName(){
        return this.firstName;
    }
}

let p1 = new Person('liu', 'qiang');

console.log(p1.getFirstName());


// 4.使用泛型变量、泛型类型、泛型接口
function identify<T>(arg: T):T{
    return arg;
}

identify(22);
identify('world');

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

interface GenericIdentityFn{
    <T>(arg: T): T
}

let identity2: GenericIdentityFn = identify

// 5.使用type 联合和泛型
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";


function testType(a: MyBool){
    console.log(a);
}

testType(true);

type StringArr = Array<string>;

// 测试泛型type
function testGenericType(param: StringArr){
    console.log(param);
    
}

testGenericType(["tet"])

// 6.枚举
export enum OrderStatus{
    CREATE=1,
    DISPATCH,
    DONE,
}

function testEnum(status: OrderStatus){
    console.log(status);

    if(status === OrderStatus.CREATE){
        console.log('order create');
    }
    
}

testEnum(2);


function testDec(param:string){
    jQuery(param)
}

// function testGlobalNamespace(fun: TestName.sayHello):void{

// }