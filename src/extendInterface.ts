interface Shape{
  color: string
}
interface Square extends Shape {
  sideLength: number
}

let squre = <Square>{}
