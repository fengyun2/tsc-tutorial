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
  fn(num: number):number {
    return num*2;
  }

}

let price:Price = new Price()
console.log(price.fn(5.5))

// 静态属性,静态方法
class Person{
  static name: string = 'time'
  static fn(num: number):void{
    console.log('success...')
    console.log('name: ', Person.name)
  }
}
let p1: Person = new Person()
Person.fn(22)
// console.log(Person.name)


// 构造函数不能返回类型
// 类定义的属性(赋值属性)会被编译到js的构造函数中
class Book {
  name: string
  page: number =400
  constructor(bookName: string) {
    this.name = bookName
    console.log(this.name)
  }
}

let b1:Book = new Book('baby')

// 继承(extends)
class Base {
  press: string = 'one'
  name: string
  constructor(bookName:string) {
    this.name = bookName
  }
}
class CBook extends Base {
  price: number
  // name: string = 'baby'
  constructor(bookName: string, price: number) {
    // 父类继承属性
    super(bookName) // 会执行父类的constructor
    this.price = price
  }
  sayName():string {
    return this.name;
  }
}

let cb: CBook = new CBook('傲慢与偏见', 198)
let bookname = cb.sayName()
console.log(bookname)
