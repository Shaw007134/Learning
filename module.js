// ES6 模块化
module MyModule {
  export let myobject = {};
  export function hello() {
    console.log("hello");
  };

  function goodbye() {
    //
  }
}

import {
  myobject,
  hello
} from MyModule;
import * from MyModule;

// AMD模块化
define(['dep1', 'dep2'], function (dep1, dep2) {
  return function () {}
})

// CommonJS(Node采用)
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `;
  }
}

module.exports = Users

//------引用
const User = require('./user');
const zsy = new User('zsy', 25, 'xyz@123.com')
console.log(zsy.getUserStats());
