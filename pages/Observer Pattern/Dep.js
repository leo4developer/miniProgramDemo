// 定义订阅者Dep
class Dep {
  constructor() {
    //初始化订阅队列
    this.subs = [];
  }
  //增加订阅者
  addSub(sub) {
    this.subs.push(sub);

  }
  //移除订阅者
  removeSub(sub) {
    this.subs.forEach((elem, index)=>{
      if (elem === sub) {
        this.subs.splice(index, 1);

      }
    })
  }
  // 通知订阅者
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    })
  }

}