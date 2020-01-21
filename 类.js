function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};
Person.prototype.getOlder = function (years) {
  this.age += years;
}

function Employee(name, age) {
  Person.call(this, name, age);
}
Employee.prototype = new Person();
Employee.prototype.constructore = Employee;

class Person {
  constructor(name, age) {
    public name = name;
    public age = age;
    private innerTitle = "";

    get title() {
      return this.innerTitle;
    }
    set title(value) {
      innerTitle = value;
    }
  }
  sayName() {
    console.log(this.name);
  }
  getOlder(years) {
    this.age += years;
  }
}
Class Employee extends Person {
  constructor(name, age) {
    super(name, age);
  }
}
