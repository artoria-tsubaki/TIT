class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;

    // 将数据进行响应式处理
    observe(this.$data);

    // 编译
    new Compile(this.$el, this);
  }

  observe(obj) {
    if(typeof obj !== "object" || obj == null) {
      return
    }

    new Observe(obj)
  }

  defineReactive(obj, key, val) {
    this.observe(val);
    Object.defineProperties(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if(newVal === val) return;
        dep.notify();
      }
    })
  }
}

class Observe{
  constructor(value) {
    this.value = value;
    this.walk(value);
  }
  walk(obj) {
    Object.keys(obj).forEach(key => {
      // 将数据转变为 getter/setter
      defineReactive(obj, key, obj[key]);
    })
  }
}

class Compile {
  constructor(el, vm) {
    this.$el = document.querySelector(el);
    this.$vm = vm;
    if(this.$el) {
      this.compile(this.$el);
    }
  }
  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if(this.isElement(node)) {
        console.log("编译元素", node.nodeName);
      } else if(this.isInterpolation(node)) {
        console.log("编译插值文本" + node.textContent)
      }
      if(node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }
  isElement(node) {
    // 判断是否为节点
    return node.nodeType == 1;
  }
  isInterpolation(node) {
    // 判断是否为插值文本 {{}}
    return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
  } 
}

class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm;
    this.key = key;
    this.updaterFn = updater;
  }

  // 未来执行dom更新函数，由dep调用
  update() {
    this.updaterFn.call(this.vm, this.vm[this.key]);
  }
}

class Dep {
  constructor() {
    this.deps = []; // 依赖管理
  }
  addDep(watcher) {
    this.deps.push(watcher);
  }
  notify() {
    this.deps.forEach(watcher => watcher.update());
  }
}