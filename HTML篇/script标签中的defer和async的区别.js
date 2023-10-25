// script标签中的defer和async的区别
/**
 * 在一般的script标签中 浏览器会立即加载并执行响应的脚本，不会等待后续的文档元素，js脚本的加载和执行都会阻塞html解析
 * 添加了defer的script标签 js脚本的加载和html解析可以同时进行，js脚本的执行需要等到html解析完成之后才执行
 * 添加了async的script标签 js脚本的加载和html解析可以同步进行，js脚本的执行在js脚本加载完后立即执行，同时阻塞html解析
 */