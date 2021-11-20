// string类型是字符串类型，可以使用单引号或者双引号表示：
let message1: string = 'hello world'
let message2: string = "hello world"


// 默认情况下，如果可以推导出对应的标识符的类型时，一般情况下可以不加类型
const name = 'zry'
const age = 18 
const height = 1.88

// 同时也支持使用es6的模板字符串来拼接变量和字符串
let message3 = `name:${name} age:${age} height:${height}`
console.log(message3);

export {}