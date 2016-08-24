/// <reference path="../../typings/index.d.ts" />
'use strict'
// 定义模块

// 暴露一个class
export class Start {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName(): string {
    return this.name;
  }
}

