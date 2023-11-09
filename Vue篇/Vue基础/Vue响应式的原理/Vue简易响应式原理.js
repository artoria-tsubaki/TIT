class Vue {
  constructor(option) {
    this.$el = document.querySelector(option.el)
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
      let node = nodes[index]
      if (node.children) {
        this.compile(node)
      }

      if(node.hasAttribute('v-text')) {
        // 将 data 数据同步到视图上，实现 M ==> V
        let attrVal = node.getAttribute('v-text')
        node.textContent = this.$data[attrVal]

        if(!this.$watcher[attrVal]) {
          this.$watcher[attrVal] = []
        }

        this.$watcher[attrVal].push(new Watcher(node, 'innerHTML', this, attrVal))
      }

      if(node.hasAttribute('v-model')) {
        // 将 data 数据同步到视图上，实现 M ==> V
        let attrVal = node.getAttribute('v-model')
        node.value = this.$data[attrVal]

        if(!this.$watcher[attrVal]) {
          this.$watcher[attrVal] = []
        }

        this.$watcher[attrVal].push(new Watcher(node, 'value', this, attrVal))
      
        node.addEventListener('input', (e) => {
          // 将输入框的变化同步到数据中，实现 V ==> M，触发数据劫持中的监听
          this.$data[attrVal] = e.target.value
        })
      }
    }
  }

  observe(data) {
    let _this = this
    Object.keys(data).forEach(key => {
      let val = data[key]
      Object.defineProperty(data, key, {
        get() {
          return val
        },
        set(newVal) {
          if(newVal !== val) {
            val = newVal
            // data 数据变化触发页面更新 实现 M ==> V
            _this.$watcher[key].forEach(watcher => watcher.update())
          }
        }
      })
    })
  }
}

class Watcher {
  constructor(node, updateAttr, vm, expression) {
    this.node = node
    this.updateAttr = updateAttr
    this.vm = vm
    this.expression = expression
  }

  update() {
    this.node[this.updateAttr] = this.vm.$data[this.expression]
  }
}