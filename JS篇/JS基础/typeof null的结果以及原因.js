// typeof null的结果以及原因
/**
 * 
 * 在JavaScript中 所有值都存储在32位的单元中，
 * 每一个单元包含一个类型标签(1-3bit)，
 * 以及当前要存储值的真实数据。
 * 类型标签存储在每个单元的低位中，共有5种。
 * 
 * 000 object
 * 001 int
 * 010 double
 * 100 string
 * 110 boolean
 * 
 * undefined (-2)30 超出整数范围的数字
 * null的值是机器码NULL --> null指针的值全是0
 * 
 * 所以 null 的类型标签也是000
 * 即 null 被错误地标记为对象类型，而不是原始类型
 */