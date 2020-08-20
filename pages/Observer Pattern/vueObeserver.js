import Dep from './Dep';

// obeserve 方法遍历并包装对象属性
function obeserve(target) {
  if (target && typeof target === 'object') {
    Object.keys(target).forEach(key=>{
      defineReactive(target, key, target[key])
    });
  }
}

function defineReactive(target, key, value) {
  const dep = new Dep();
  // 属性值也可能是object类型，这种情况下需要调用observe进行递归遍历
  obeserve(value);
  // 为当前属性安装监听器
  Object.defineProperty(target, key, {
    // 可枚举
    enumerable: true,
    // 不可配置
    configurable: false,
    get: function() {
      return value;
    },
    // 监听器函数
    set: function(newValue) {
      console.log(`${target}属性的${key}属性从${value}值变成了${newValue}`);
      value = newValue;
      dep.notify();
    }
  })
} 