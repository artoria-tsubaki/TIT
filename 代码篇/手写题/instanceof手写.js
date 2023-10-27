// instanceof 手写
/**
 * 
 * @param {any} left 要比较的对象
 * @param {Object} right 要比较的构造函数
 */
const myInstanceof = (left, right) => {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while(true) {
    if(!proto) return false;
    if(proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}