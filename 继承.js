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
