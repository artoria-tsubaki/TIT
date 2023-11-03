// typeof NaN的值是什么？
typeof NaN === "number" // true

/**
 * 1. NaN是值"不是一个数字(Not A Number)"，用于指出数字类型中错误的情况。
 * 2，即"执行数字运算没有成功，这是失败后返回的结果"
 * 3. NaN是一个特殊值，他和本身不相同，NaN与谁都不相等包括自己本身（但 NaN != NaN 值为 true）
 */