// img标签中srcset属性有什么作用
/**
 * 响应式页面中为了适应不同分辨率设置不同的图片，这就用到了srcset属性
 * 通过使用 img 标签的 srcset 属性，可定义一组额外的图片集合，让浏览器根据不同的屏幕状况选取合适的图片来显示。
 * 
 * <img src="images/gun.png"
    srcset="images/bg_star.jpg 1200w, images/share.jpg 800w, images/gun.png 320w"
    sizes="(max-width: 320px) 300w, 1200w"/>
    上面的例子表示浏览器宽度达到 800px 则加载 share.jpg ，达到 1200px 则加载 bg_star.jpg
    表示浏览器视口为 320px 时图片宽度为 300px，其他情况为 1200px。
 */