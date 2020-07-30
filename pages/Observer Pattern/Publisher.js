export default class Publisher {
  constructor() {
    this.observers = [];
  }
  // 添加订阅者
  add(observer) {
    this.observers.push(observer);
  }
  // 移除订阅者
  remove(observer) {
    this.observers.forEach((item, index)=>{
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    })
  }
  //通知订阅者
  notify() {
    this.observers.forEach(observer=>{
      observer.update(this);
    })
  }

}
