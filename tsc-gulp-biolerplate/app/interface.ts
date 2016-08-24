/// <reference path="../typings/index.d.ts" />

// 定义接口对象
interface Person {
  name: string
  age: number,
  sex: string,
  hobby?:any
}

// 使用接口
function getName(person: Person):string {
  return person.name;
}

// 实现接口
let n:string = getName({
  name: 'baby',
  age: 23,
  sex: 'man'
})
console.log(n)

/**
 * 接口函数
 */

// 定义抽象类
interface Add {
  (num11: number, num22: number):number
}
// 使用接口
let fn:Add

// 实现接口
fn=function(num1:number, num2:number):number {
  return num1+num2;
}
let result: number = fn(10.5,20)
console.log(result)

/*// 类的接口定义*/

// 时间接口
interface Base {
  current:string
  getCurrentDate():string
}

// 使用接口
class Times implements Base {
  current: string
  constructor(d:string) {
    this.current = d
  }
  getCurrentDate():string {
    return this.current
  }
}

let d: Times = new Times(new Date().toString())
console.log(d)
console.log(d.getCurrentDate())
