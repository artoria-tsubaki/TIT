// 页面导入样式link和@import的区别
/**
 * 1. 从属关系的区别
 *      1. link 属于 XHTML 标签，除了加载CSS外，还可以定义RSS等事物
 *      2. @import 是CSS定于的语法，用于加载CSS
 * 2. 加载顺序的区别
 *      1. link 引入 CSS 时，在页面载入时同时加载
 *      2. @import 是在页面完全载入后再去加载
 * 3. DOM可控性
 *      1. link支持使用 JavaScript 控制 DOM 去改变样式
 *      2. @import 不支持
 */