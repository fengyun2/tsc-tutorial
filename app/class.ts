/// <reference path="../typings/index.d.ts" />

// 在类中添加的属性会编译到构造函数中,该属性如果不不赋值,则不会被编译.
// 在类中添加的方法会被编译到构造函数的 Prototype 上
/**
 * name
 */
class Price {
  price: number = 10
  constructor() {

  }
  fn(num: number):string {
    return num*2;
  }

}

let price = new Price()
console.log(price.fn(5.5))
