// 什么是伪数组 类数组
/**
 * 1. 一个拥有 length 属性和若干索引属性的对象即伪(类)数组
 * 2. 伪数组与数组相似，但不能调用数组的方法
 * 3. 常见的伪数组有 函数的arguments、DOM操作后的结果等
 * 4. 伪数组转化为数组的方法有哪些
 *    1. Array.from(arrayLike)
 *    2. [...arrayLike]
 *    3. Array.prototype.slice.call(arrayLike)
 *    4. Array.prototype.concat.apply([], arrayLike)
 */