# 目录结构
+- src/
|   +- components
|
+- dist/

# Install

### init project
```bash
npm init
```

### install dependencies
```bash
npm install -g typescript typings webpack
```

* webpack
* typings   是一个包管理器,它是用来获取定义文件的
* typescript

```bash
npm install --save react react-dom
```

```bash
npm install --save-dev ts-loader source-map-loader
npm link typescript
```

* `ts-loader`可以让webpack使用TypeScript的标准配置文件`tsconfig.json`编译TypeScript代码
* `source-map-loader`使用TypeScript输出的sourcemap文件来告诉webpack何时生成自己的sourcemaps
* 链接TypeScript，允许ts-loader使用全局安装的TypeScript，而不需要单独的本地拷贝。 如果你想要一个本地的拷贝，执行`npm install typescript`

使用`typings`工具来获取React的声明文件：
```bash
typings install --global --save "dt~react"
typings install --global --save "dt~react-dom"
```
`--global`标记，还有`dt~`前缀，告诉Typings从[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)获取声明文件，它是一个由社区维护的`.d.ts`文件仓库。 这个命令会创建一个名为`typings.json`的文件和一个`typings`目录在当前目录下。
