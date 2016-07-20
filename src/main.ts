import {sayHello} from "./greet"
import {printLabel} from "./printLabel"
import {createSquare} from "./Square"

function hello(compiler: string) {
  console.log(`Hello from ${compiler}`)
}
hello("TypeScript")

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName)
  elt.innerText = sayHello(name)
}
showHello('greeting', "TypeScript")

let myObj = {size: 10, label: 'Size 10 Object', name: '张三'}
printLabel(myObj)

let mySquare = createSquare({color: "black"})
console.log(mySquare)
