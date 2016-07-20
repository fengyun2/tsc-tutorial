import { sayHello } from "./greet"
import { printLabel } from "./printLabel"
import { createSquare } from "./Square"
import mySearch from "./functionType"
import { Clock } from "./Clock"

function hello(compiler: string) {
  console.log(`Hello from ${compiler}`)
}
// hello("TypeScript")

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName)
  elt.innerText = sayHello(name)
}
// showHello('greeting', "TypeScript")

let myObj = { size: 10, label: 'Size 10 Object', name: '张三' }
printLabel(myObj)

let mySquare = createSquare({ color: "black", width: 100, age: 20 })
console.log(mySquare)

let my_search = { source: 'http://www.baidu.com', subString: 'www' }
  // mySearch(my_search)


// 可索引的类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ["Baby", "Hi", "Welcome"]

let myStr: string = myArray[0]

// console.log(myStr)

let clock = new Clock(2016, 7)
clock.getH()
clock.setTime(new Date('2016-07-20'))
clock.geTime()

// 扩展接口
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}
interface Square extends Shape, PenStroke {
  sideLength: number
}

let squre = < Square > {}
squre.color = "blue"
squre.sideLength = 10
squre.penWidth = 5.0
  // console.log(squre)

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = < Counter > function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter;
}
let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

console.log(c.interval)



let passcode = "secret passcode"

class Employee {
  private _fullName: string

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('你没有权限修改密码')
    }
  }
}

let employee = new Employee()
employee.fullName = "baby"
if (employee.fullName) {
  console.log(employee.fullName)
}

class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter: Greeter
greeter = new Greeter("world")
console.log(greeter.greet())
