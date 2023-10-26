// new 手写

const myNew = (Constructor, ...args) => {
  if(typeof Constructor !== "function") {
    return new Error("请传递构造函数");
  }

  let obj = Object.create(Constructor.prototype);
  const res = Constructor.apply(obj, args);
  return typeof res === "object" ? res : obj
}