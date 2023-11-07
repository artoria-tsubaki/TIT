class Vue {
  constructor(option) {
    this.$el = document.querySelector(ooption.el)
    this.$data = option.data

    // 存放属性观察者
    this.$watcher = {}

    // 解析器 遍历元素获取到所有有指令的DOM元素，识别指令 添加监听器
    this.compile(this.$el)

    // 数据劫持 使用defineProperty 监听数据变化
    this.observe(this.$data)
  }

  compile(el) {
    let nodes = el.children
    for (let index = 0; index < nodes.length; index++) {
      let node = nodes[i]
      if (node.children) {
        this.compile(node)
      }

      if(node.hasAttribute('v-text')) {
        
      }
    }
  }
}