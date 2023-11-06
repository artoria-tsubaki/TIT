// 响应式图片优化 Picture标签
/**
 * Picture 标签就像是图片和其源的容器。浏览器仍然需要 img 标签，用来表面需要的图片资源。
 * 在 Picture标签 下可以放置零个或多个 source标签，以及一个 img标签，为不同屏幕或场景设置不同的图片资源。
 * 如果 source 匹配到了就优先使用匹配到的，没有就继续往吓找。
 * 
 * <picture>
 *  <source srcset="img_640.png" media="(min-width: 640px)">
 *  <source srcset="img_1080.png" media="(min-width: 1080px)">
 *  <img src="img.png" alt="">
 * </picture>
 */