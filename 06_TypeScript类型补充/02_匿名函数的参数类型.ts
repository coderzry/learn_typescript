// 通常情况下，在定义一个函数时，都会给参数加上类型注释的
function foo(message: string) {

}

const names = ['asd', 'asd', 'sda']
// item根据上下文的环境推导出来的，这个时候可以不添加类型注释
// 上下文中的函数： 可以不添加类型注释
names.forEach(function(item) {
  console.log(item.split(''));
})