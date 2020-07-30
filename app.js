import Cart from './services/cart.js';
//app.js
App({
  onLaunch: async function () {
    // 展示本地存储能力
    this.cart = new Cart();
    
  },
  globalData: {
    userInfo: null
  },
   async test() {
     console.log('000');
     return '000';
   },
   async test1() {
     console.log('000');
     return '111'
   }
})