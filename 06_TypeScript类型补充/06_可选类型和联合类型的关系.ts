// 让一个参数是可选的
// 一个参数是可选类型的时候, 它其实类似于是这个参数是 类型|undefined 的联合类型
// function foo(message?: string) {
//   console.log(message);
// }

function foo(message: string|undefined) {
  console.log(message);
}

// 可选类型直接调用不传参数也可
// foo()

// 联合类型必须指定传入一个undefined
foo(undefined)
