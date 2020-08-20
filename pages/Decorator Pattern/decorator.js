// 类装饰器
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}
// 方法装饰器

/**
 *
 *
 * @param {*} target 类的原型对象。
 * @param {*} name 目标属性属性名
 * @param {*} descriptor 属性描述对象
 * @returns
 */
function funcDecorator(target, name, descriptor) {
  console.log(target, name, descriptor);
  let originalMethod = descriptor.value;
  descriptor.value = function() {
    console.log('我是函数的装饰器逻辑');
    return originalMethod.apply(this, arguments);
  }
  return descriptor;
}
// 将装饰器安装到类上去
@classDecorator
export default class Button {

  @funcDecorator
  onclick() {
    console.log('我是func的原有逻辑');
  }
}