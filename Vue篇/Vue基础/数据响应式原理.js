// Vue的数据响应式原理
/**
 * 1. 通过Observer方法将需要的数据经过defineProperty(proxy)递归建立可观察对象
 *    将需要的数组通过array.js提供的方法对数组原型进行hack复写
 *    来转化为 getter/setter
 * 2. 通过Dep类在getter进行收集依赖，在属性setter被访问或者修改时通知变化
 * 3. watcher中实例化了dep并向dep.subs中添加了订阅者，dep通过notify遍历了dep.subs通知每个watcher更新
 * 4. watcher通过update方法更新，执行回调函数来更新相关的vm值
 */