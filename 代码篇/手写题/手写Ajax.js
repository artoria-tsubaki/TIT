const SERVER_URL = "";

function request(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    // 创建 http 请求
    xhr.open("open", url, true);
    // 设置状态监听函数
    xhr.onreadystatechange = function () {
      if(this.readyState !== 4) return
      // 请求成功
      if(this.status === 200) {
        // 请求成功的处理
        resolve(this.response)
      } else {
        reject(new Error(this.statusText));
      }
    }
    // 设置请求失败时的监听函数
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    }
    // 设置请求头信息
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer token..............");
    // 发送 Http 请求
    xhr.send(null);
  })
}