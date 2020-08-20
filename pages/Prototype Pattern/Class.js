const Vehicle = function (price) {
  this.price = price;
};

const v = new Vehicle();
// console.log(v.price);

// 构造函数被当成普通函数处理时，this 可能指向了全局
const v1 = Vehicle();
// console.log(this.price);
// console.log(v1);

function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}
const car = _new(Vehicle, 1000);


function Person(name, age) {
  this.name = name;
  this.age = age;
}
// new 命令的原理
function _new1 (/* 构造函数 */constructor, /* 构造函数 */params) {
  console.log(constructor, params);
  // 将arguments 对象转为数组
  const args = [].slice.call(arguments);
  console.log('args:', args);
  // 取出构造函数 var 命令重新声明会覆盖已经存在的变量
  var constructor = args.shift();
  console.log('constructor：', constructor);
  // 创建一个空对象,继承构造函数的 prototype 属性
  const context = Object.create(constructor.prototype);
  console.log('context:', context);
  // 执行构造函数 将空对象赋值给函数内部的 this 关键字 
  const result = constructor.apply(context, args);
  console.log('result:', result);
  console.log('context:', context);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
  
}
// 实例
var actor = _new1(Person, '张三', 28);
console.log(actor);

