// 工厂模式
function createFunction(name, age) {
  var o = new Object()
  o.name = name
  o.age = age
  o.sayHello = function() {
    console.log('hello ' + o.name)
  }
  return o
}

var person1 = createFunction('zsy', 20)
var person2 = createFunction('shaw', 25)
person1.sayHello()
person2.sayHello()

console.log(person1 instanceof Object)
console.log(person1 instanceof createFunction)

// 构造函数模式
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayHello = function() {
    console.log('Hello ' + this.name)
  }
}
/*
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象(this指向新对象)
3. 执行构造函数中的代码(为新对象添加属性)
4. 返回新对象
*/
var person1 = new Person('zsy', 20)
var person2 = new Person('shaw', 25)
// person1.sayHello()

console.log(person1 instanceof Object)
console.log(person1 instanceof Person)

// 原型模式
function Person() {}

Person.prototype.name = 'zsy'
Person.prototype.age = 29
Person.prototype.sayHello = function() {
  console.log(this.name)
}

var person1 = new Person()
console.log(Person.prototype.constructor)
/*
由于其共享性，导致其若有引用类型，则会导致全部实例都会被修改
*/

// 组合使用构造函数模式和原型模式

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['zsy','shaw'];
}

Person.prototype = {
  constructor: Person;
  sayName: function() {
    console.log(this.name);
  }
}

// 动态原型模式，判断初始化时是否存在

// 寄生构造函数模式
function Person(name, age){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayHello = function () {
    console.log(this.name)
  }
  return o;
}

var person1 = new Person('zsy',25)

function SpecialArray() {
  var values = new Array();

  values.push.apply(values, arguments);

  values.toPipedString = function() {
    return this.join("|");
  };

  return values;
}

var colors = new SpecialArray('red','blue','green')
console.log(colors.toPipedString());

