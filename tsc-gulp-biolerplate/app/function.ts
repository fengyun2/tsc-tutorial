/// <reference path="../typings/index.d.ts" />
// tsc函数可以创建有名字的函数和匿名函数
// tsc函数执行返回值需要定义数据类型,如果没有结果需要定义为void
// tsc函数,参数需要定义类型,在调用的时候,传递的参数一定要和定义时的参数个数一样.否则编译报错.

function add(a:number, b:number):number{
  return a+b;
}
let sum = add(10, 20)

console.log(sum)


// 定义void返回值
setProperty()
function setProperty():void{
  console.log('success...')
}

// 在tsc中可以在参数名旁边使用 ? 实现可选参数

function count(str1: string, str2?: string):string {
  return `${str1} --- ${str2}` ;
}

let result = count('xixi', 'baby')
console.log(result)

// 剩余参数
function countNumber(...nums: number[]) {
  console.log(nums, typeof nums)
}
countNumber(1,2,3,4,5,6)
