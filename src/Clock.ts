interface ClockInterface {
  currentTime: Date
  setTime(d: Date): any
  geTime: any
}

export class Clock implements ClockInterface {
  currentTime: Date
  constructor(y: number, m: number) {
    this.currentTime = new Date(y, m)
  }
  getH() {
    console.log(this.currentTime)
  }
  setTime(d: Date) {
    this.currentTime = d;
  }
  geTime() {
    console.log(this.currentTime)
  }
}
