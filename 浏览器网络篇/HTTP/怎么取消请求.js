// 怎么取消请求
/**
 * 1. 原生xhr取消请求
 *    const xhr = new XMLHttpRequest()
 *    xhr.abort()
 * 2. axios取消请求
 *    1. 使用 CancelToken.source工厂方法创建 cancel token
 *      const CancelToken = axios.CancelToken
 *      const source = CancelToken.source()
 *      axios.get(url, {
 *        cancelToken: source.token  
 *      }).catch(function (thrown) {
 *        if(axios.isCancel(thrown)) {
 *          console.log('axios cancel: ', thrown)
 *        } else {
 *          // 错误处理
 *        }
 *      })
 *    2. 传递一个 executor函数 到 CancelToken构造函数中来创建 cancel token
 *      const CancelToken = axios.CancelToken
 *      let cancel
 *      axios.get(url, {
 *        cancelToken: function executor(c) {
 *          // executor 函数接收一个 cancel 函数作为参数
 *          cancel = c
 *        } 
 *      })
 *      
 *      cancel()
*/
