// 为什么有时候用 translate 改变位置而不是定位
/**
 * 1. translate 是 transform 的一个值，改变 translate的值不会触发 重排(reflow) 或 重绘(repaint)，只会触发复合(compositions)
 * 2. 绝对定位会触发重排，进而触发重绘和复合
 * 3. transform使浏览器为元素创建一个GPU图层，而绝对定位使用的是CPU，因此translate效率更高，可以有效缩减平滑动画的绘制时间
 * 4. translate改变元素位置时，元素仍然会占据其原始空间，而绝对定位会脱离文档流不再占用空间
 */