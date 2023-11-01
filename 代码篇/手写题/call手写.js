// 手写call函数
/**
 * 1. 判断调用对象是否为函数
 * 2. 判断传入上下文对象是否存在，不存在设置为window
 * 3. 通过新增属性来绑定 this
 * 4. 截取函数传递的参数
 * 5. 调用函数保存结果
 * 6. 删除新增的属性，返回结果
 */

Function.prototype.myApply = function (context) {
  if(typeof this !== "function") {
    return new Error("请传递一个函数")
  }
  context = context || window

  let result = null

  context.fn = this

  let args = [...arguments].slice(1)

  result = context.fn(...args)

  delete context.fn
  return result
}