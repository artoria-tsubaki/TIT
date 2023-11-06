// 对盒模型的理解
/**
 * 所有盒模型都是由 content border margin padding 组成
 * 标准盒模型 和 IE盒模型 的区别在于，定义 width 和 height 时，所包含的范围不同
 * 标准盒模型： width = content
 * IE盒模型： width = content + border + padding + margin
 * 
 * 通过 box-sizing 属性可以设置元素的盒模型属性
 * box-sizing: content-box 标准盒模型
 * box-sizing: border-box IE盒模型
 */