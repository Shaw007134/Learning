// ES6 模块化
module MyModule {
  export let myobject = {};
  export function hello() { console.log("hello"); };

  function goodbye() {
    //
  }
}

import {myobject, hello} from MyModule;
import * from MyModule;

// 
