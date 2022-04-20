

// 声明全局变量
declare var testVar: string;
declare var jQuery: (selector: string) => any;

// 声明全局函数
declare function test(str: string): any;

// 声明全局类
declare class A{
    name: string;
    constructor(name: string);
}

// 定义全局namespace 表示全局变量是一个对象包含很多子属性
declare namespace TestName{
    function sayHello(firstName: string, lastName?: string):string;
}