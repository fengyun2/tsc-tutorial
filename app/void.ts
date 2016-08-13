// 空值
// void 类型像是与 any类型相反,它表示没有任何类型

const unvoid: void = null
const unvoid1: void = undefined


const u: undefined = undefined
const n: null = null

let someValue: any = 'colors'
let strlength: number = (<string>someValue).length
console.log(strlength)
