// 当进行一些类型断言 as any
// 在不想给某些Javascript添加具体的数据类型时
/*
  我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法；
  我们可以给any类型的变量赋值任何的值，比如数字、字符串的值
 */
let message: any = 'Hello World'

message = 'abc'
message = 123
message = {

}

function foo(payLoad: any) {}

console.log(message);

export{}