// 这是一个构造函数
function Dog(name, age) {
  this.name = name;
  this.age = age;
  // this.eat = function () {
  //   console.log('狗吃肉骨头');
  // }
}
// 构造函数有 prototype 属性
// 实例对象可以访问原型对象的方法和属性

Dog.prototype.eat = function () {
  console.log('狗吃肉骨头');
}
//使用构造函数创建实例
const dog = new Dog('旺财', 2);
dog.eat();
console.log('构造函数的原型对象:', Dog.prototype);
console.log('实例对象的原型对象:', dog._proto_);
console.log('原型对象的构造器:', Dog.prototype.constructor);

const myArray = function () {
  
}

console.log('构造函数的原型对象:', myArray.prototype);
// console.log('实例对象的原型对象:', dog._proto_);
console.log('原型对象的构造器:', myArray.prototype.constructor);

// 继承
function Shape() {
  this.x = 0;
  this.y = 0;
}
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.log('Shape move');
}

function Rectangle() {
  Shape.call(this);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;