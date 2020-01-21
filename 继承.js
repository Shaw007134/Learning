// 原型链
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

//原型继承SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue); // true
console.log(instance instanceof Object); //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType); //true


// 借用构造函数
function SuperType(name) {
  this.colors = ["red", "blue", "green"];
  this.name = name;
}

SuperType.prototype.print = function () {
  this.colors.forEach(e => console.log(e));
}

function SubType() {
  SuperType.call(this, "subColor");
  this.size = 100;
}

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);
console.log(instance1.size);
var instance2 = new SubType();
console.log(instance2.colors);
instance2.print();


// 组合继承
function SuperType(name) {
  this.colors = ["red", "blue", "green"];
  this.name = name;
}

SuperType.prototype.print = function () {
  this.colors.forEach(e => console.log(e));
}

function SubType(name, size) {
  SuperType.call(this, name);
  this.size = size;
}

SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType;
SubType.prototype.saySize = function () {
  console.log(this.size);
}

var instance1 = new SubType("instance1", 100);
var instance2 = new SubType("instance2", 50);

//原型式继承
var person = {
  name: "zsy",
  friends: ["ab", "bc", "cd"]
}

var Person1 = Object.create(person);
Person1.name = "shaw";
Person1.friends.push("bob");
var Person2 = Object.create(person, {
  name: {
    value: "test"
  }
});

console.log(Person2.name)

//寄生式继承
function createAnother(original) {
  var clone = object(original);
  clone.sayHi = function () {
    console.log("Hi");
  };
  return clone;
}

var person = {
  name: "zsy",
  friends: ["ab", "bc"]
};

//寄生组合继承
function inheritPrototype(subType, superType) {
  var prototype = object(superType.protoType); //创建超类型原型的副本
  prototype.constructor = subType; // 为创建的副本添加constructor属性
  subType.protoType = prototype; // 将新创建的对象赋值给子类型的原型
}
function SuperType(name) {
  this.name = name;
  this.colors = ["read", "blue", "green"];
}

SuperType.protoType.sayName = function() {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
  console.log(this.age);
}
