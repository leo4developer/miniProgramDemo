const { default: Observer } = require("./Observer");

export default class DeveloperObserver extends Observer {
  constructor() {
    super();
    this.prdState = {};
  }
  update(publisher) {
    console.log('DeveloperObserver.update invoked')
    // 更新需求文档
    this.prdState = publisher.getState();
    // 调用工作函数
    this.work();
  }
  work() {
    const prd = this.prdState;
    console.log('真正的工作内容');
  }
}