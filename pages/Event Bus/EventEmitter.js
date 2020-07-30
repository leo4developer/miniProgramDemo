class EventEmitter {
  constructor() {
    // handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {};
  }
  // on方法用于安装时间监听器，他接手目标事件名和回调函数作为参数
  on(eventName, callback) {
    //先检查一下目标事件名有没有对应的监听函数队列
    if (!this.handlers[eventName]) {
      //如果没有，那么首先初始化一个监听函数队列
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  }

  //emit方法用于触发目标事件，他接受事件名和监听函数入参作为参数
  emit(eventName,...args) {
    //检查目标事件是否有监听函数队列
    if (this.handlers[eventName]) {
      //如果有，则逐个掉哟个队列里的回调函数
      this.handlers[eventName].forEach(callback=>{
        callback(...args);
      });
    }
  }
  // off用于移除某个事件回调队列里的指定回调函数
  off(eventName, callback) {
    const callbacks = this.handlers[eventName];
    const index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  }

  // once为事件注册单词监听器
  once(eventName, callback) {
    // 对回调函数惊醒包装，使其执行完毕后自动被移除
    const wrapper = (...args)=>{
      callback.apply(...args);
      this.off(eventName, wrapper);
    }
    this.on(eventName, wrapper);
  }
}