// 数字类型
// ts和js一样，不区分整数类型(int)和浮点型(double)，统一称为number类型
let num: number = 123
num = 222

// num = '111'

// 其他进制表示
let num1: number = 100  // 十进制
let num2: number = 0b100  // 二进制
let num3: number = 0o100  // 八进制
let num4: number = 0x100  // 十六进制

console.log(num1, num2, num3, num4);