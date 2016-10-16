import {camelCase} from 'lodash'

function sayHello(name: string) {
  return `Hello, ${name}`
}
let myName = 'Ly'
console.log(sayHello(myName))
console.log('1111');
console.log('看我正常了否?')
console.log(camelCase('helloworld'))
