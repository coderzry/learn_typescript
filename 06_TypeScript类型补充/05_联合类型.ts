// number|string 联合类型
function printId(id: number|string|boolean) {
  // 使用联合类型的值时, 需要特别的小心
  // narrow: 缩小
  if (typeof id === 'string') {
    // TypeScript帮助确定id一定是string类型
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId(123)
printId('asd')
printId(true)

export {}


