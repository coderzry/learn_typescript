// Point: x/y ——> 对象类型
// 可选类型,可以传也可以不传,z?,后面跟问号
// {x: number, y: number, z?: number}
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint({x: 123, y:321})
printPoint({x: 123, y:321, z: 555})

export{}