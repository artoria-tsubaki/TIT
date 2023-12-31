// 说说你对堆区和栈区的理解
/**
 * 1. 在操作系统中
 *      栈区由编译器自动分配，存放函数形参 局部变量
 *      堆区由开发者分配，若开发者不主动释放 没有再使用的变量会被回收
 * 2. 在数据结构中
 *      栈区先入后出
 *      堆区按照优先级排序 优先级可以按照大小排序
 * 3. 数据的储存方式
 *      栈区的简单数据段中存放原始数据类型 占据空间小 大小固定 属于被频繁使用的数据
 *      堆区主要存放引用数据类型 占据空间大 大小不固定，如果存储在栈中会影响程序性能。
 *      引用类型数据在栈区中存放了指针，指针指向堆中该实体的起始地址。会先在栈区中找到该数据的指针，再通过地址获取到堆区的数据。
 */
