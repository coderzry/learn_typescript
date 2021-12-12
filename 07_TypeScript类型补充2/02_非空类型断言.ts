// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length)
  // }
  // vue3源码
  // message一定有值
  console.log(message!.length)
}

printMessageLength("aaaa")
printMessageLength("hello world")

