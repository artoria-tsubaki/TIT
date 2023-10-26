// 常见的HTTP请求头和响应头
// a 表示 */*
/**
 * HTTP Request Header
 *  1. Accept 浏览器能够处理的内容类型 application/json, text/plain a
 *  2. Accept-Charset 浏览器能够显示的字符集
 *  3. Accept-Encoding 浏览器能够处理的压缩编码 gzip, deflate, br
 *  4. Accept-Language 浏览器当前设置的语言 zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7
 *  5. Cookie 当前页面设置的任何Cookie
 *  6. Connection 浏览器与服务请之间连接的类型 keep-alive
 *  7. Host 发出请求的页面所在域 localhost:1754
 *  8. Refer 发出请求的页面的URL http://localhost:1754/
 *  9. User-Agent 浏览器的用户代理字符串
 * 
 * HTTP Response Header
 *  1. Date 表示消息发送的时间 Thu, 26 Oct 2023 01:01:57 GMT (时间格式为rfc822)
 *  2. Connection 浏览器与服务请之间连接的类型 keep-alive
 *  3. Cache-Control 控制HTTP缓存
 *  4. Content-type 表示好后面的文档属于什么MIME类型
 * 
 * Content-Type
 * 常见的Content-Type 属性值
 *  1. application/x-www-form-urlencoded 
 *    浏览器原生form表单 key1=val1&key2=val2 的方式进行编码
 *  2. multipart/form-data
 *    常见的POST提交方式，常用于表单上传文件
 *  3. application/json 
 *    服务器消息主体是序列化后的JSON字符串
 *  4. text/xml 主要用来提交XML格式的数据
 */