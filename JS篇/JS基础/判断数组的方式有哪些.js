// 判断数组的方式有哪些
/**
 * 1. Array.isArray([]) --> boolean
 * 2. Object.prototype.toString.call([]).slice(8, -1) --> === 'Array'
 * 3. [] instanceof Array --> boolean 
 * 4. [].__proto__ === Array.prototype Object.getPrototypeOf([]) === Array.prototype ---> boolean
 * 5. Array.prototype.isPrototypeOf([]) --> boolean
 */