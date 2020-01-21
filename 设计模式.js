//设计模式

//观察者模式
/*
由两类对象组成，主体和观察者，主体发布事件，观察者订阅事件来观察主体
*/

function EventTarget() {
  this.handlers = {};
}

EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function (type, handler) {
    if (typeof this.handlers[type] == "undefined") {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler);
  },

  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (this.handlers[event.type] instanceof Array) {
      var handlers = this.handlers[event.type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        handlers[i](event);
      }
    }
  },

  removeHandler: function (type, handler) {
    if (this.handlers[type] instanceof Array) {
      var handlers = this.handlers[type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i] === handler) {
          break;
        }
      }
      handlers.splice(i, 1);
    }
  }
}


function handleMessage(event) {
  console.log("Message received: " + event.message);
}

function handleMessage1(event) {
  console.log("Message handle1: " + event.message);
}
// 创建一个新对象
var target = new EventTarget();
// 添加一个事件处理程序
target.addHandler("message", handleMessage);
target.addHandler("message", handleMessage1);
// 触发事件
target.fire({
  type: "message",
  message: "Hello World!"
});
// 删除事件处理程序
target.removeHandler("message", handleMessage);
target.fire({
  type: "message",
  message: "Hello World!"
});

function Person(name, age) {
  EventTarget.call(this);
  this.name = name;
  this.age = age;
}

Person.prototype = new EventTarget();
Person.prototype.constructor = Person;
Person.prototype.say = function (message) {
  this.fire({
    type: "message",
    message: message
  });
};

function handleMessage(event) {
  console.log(event.target.name + " says: " + event.message);
}

// 创建新person
var person = new Person("zsy", 25);
// 添加一个事件处理程序
person.addHandler("message", handleMessage);
// 在该对象上调用1个方法，它触发消息事件
person.say("Happy new year 2020")


// ES6 写法
// 主题，接收状态变化，触发每个观察者
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  attach(observer) {
    this.observers.push(observer)
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

// 观察者，等待被触发
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

// 测试代码
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

s.setState(1)
s.setState(2)
s.setState(3)
