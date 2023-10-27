// 数据类型监测的方式有哪些 各有什么优缺点
/**
 * 1. typeof 
 *  缺点：不能检测出 null，引用类型数据除了 function 其他监测出来都是 object
 * 2. instanceof
 *  优点：能监测出来引用类型数据
 *  缺点：不能监测基础数据类型
 * 3. constructor.name
 *  优点：除了undefined 和 null的数据都能监测出来
 *  缺点：数据的 constructor属性 能被人为更改
 * 4. Object.prototype.toString.call
 *  优点：能检测出所有的类型
 *  缺点：IE6下 undefined 和 null 监测为 Object
 */