// 手写bind函数
/**
 * 1. 判断调用对象是否为函数
 * 2. 保存当前函数的调用，获取其余传入参数值
 * 3. 创建一个函数返回
 * 4. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况
 */

Function.prototype.bind = function (context) {
  if(typeof this !== "function") {
    return new Error("请传递一个函数")
  } 

  let args = [...arguments].slice(1),
  fn = this

  return function Fn() {
    fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments) 
    )
  }
}