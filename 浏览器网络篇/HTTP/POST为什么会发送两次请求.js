// POST 为什么会发送两次请求
/**
 * 1. 第一次请求是“预检请求”，第二次请求才是正式请求
 * 2. 预检请求是为了确认服务器是否允许客户端进行跨域请求
 * 3. 并不是所有的POST请求都是会发送两次，只有当以下情况（即非简单请求，不同时满足一下情况为非简单请求）才会发送“预检请求”
 *  1. 有自定义请求头
 *  2. content-type不为 application/x-www-form-urlencoded multipart/form-data text/plain
 *  3. 请求方法不是GET、HEAD或POST。  
 */