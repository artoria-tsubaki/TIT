// isNaN和Number.isNaN的区别
/**
 * isNaN函数收到参数后，会尝试将函数转化为数值，任何不能转化为数值的都会返回true，因此非数字值传入也会为true
 * Number.isNaN首先会判断是否是数字，是数字才会继续判断是否是NaN，不会进行类型的转换，结果更精准
 * 
 * isNaN("hello") --> true
 * Number.isNaN("hello") --> false
 */