const simulate = require('miniprogram-simulate');
const path = require('path');

test('components/user', (done) => { // 定义测试名称,传入done表示当前测试是异步测试，需要回调函数来告诉jest，我测试执行完毕
  const id = simulate.load(path.join(__dirname, '../../components/user')); // 加载组件
  const component = simulate.render(id); // 渲染组件

  const text = component.querySelector('.nickname'); // 获取nickname节点
  const button = component.querySelector('.button'); // 获取button节点
  button.dispatchEvent('getuserinfo', { // 模拟触发事件
    detail: {   // 传递事件参数
      userInfo: {
        nickName: 'hexxxxllo',
      },
    },
  });
  setTimeout(() => { // 异步断言
    expect(text.dom.innerHTML).toBe('hello'); // 检测text节点的innerHTML等于模拟授权获取的昵称
    done();
  }, 1000);
});