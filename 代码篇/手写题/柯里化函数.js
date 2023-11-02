// 柯里化函数 --> 将含有多个参数的函数转化为一系列参数的函数
function curry(fn) {
  return (...args) => {
    if(fn.length <= args.length) {
      return fn(...args)
    } else {
      return (...args2) => {
        return curry(fn)(...args, ...args2)
      }
    }
  }
}

/**
 * 
 * function add(a, b, c) {
 *  return a + b + c
 * }
 * 
 * const curriedAdd = curry(add)
 * 
 * console.log(curriedAdd(1)(2)(3)); // 输出6
 * console.log(curriedAdd(1,2)(3)); // 输出6
 * console.log(curriedAdd(1)(2,3)); // 输出6
 * console.log(curriedAdd(1,2,3)); // 输出6
 */