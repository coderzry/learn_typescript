// var/let/const 标识符: 数据类型 = 赋值;
var name: string = 'zry'
let age: number = 18
const height: number = 1.88

// string和String的区别
// string: TypeScript中的字符串类型
// String: Javascript的字符串包装类的类型
const message: string = 'Hello world'

// 默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
// 这个过程称之为类型推导/推断
let foo = 'foo'
// foo = 123

export {}