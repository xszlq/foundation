/**
 * 实现new 操作符
 * 
  function Person(name, age) {
     this.name = name;
       this.age = age;
     }
 Person.prototype.say = function() {
  console.log(this.age);
 };
 let p1 = myNew(Person, "lihua", 18);
 console.log(p1.name);
 console.log(p1);
 p1.say();
 * 
 */

function myNew(fn, ...args) {
  let ins = Object.create(fn.prototype);

  const result = fn.call(ins, ...args);

  if (result && (typeof result === "object" || typeof result === "function")) {
    return result;
  }

  return ins;
}
