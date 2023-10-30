// 防抖 点击最后一次后重新开始计时
function debounce (callback, delay = 2000, immediate = true) {
  let timer = null
  let isIm = true
  return function (...args) {
    if (timer) clearTimeout(timer)
    if(immediate && isIm) {
      callback.apply(this, args)
      isIm = false
    } else {
      timer = setTimeout(() => {
        callback.apply(this, args)
        isIm = true
      }, delay);
    }
  }
}

// 节流 在一段时间内只能点击一次
function throttle (callback, delay = 2000) {
  let timer = null
  return function (...args) {
    if(timer) return
    callback.apply(this, args)
    timer = setTimeout(() => {
      timer = null
    }, delay);
  }
}

function print () {
  console.log(123);
}
const debounceFn = debounce(print)
const throttleFn = throttle(print)