//index.js
import indexLogic from './indexLogic.js';
import systemInfoService from '../../services/System.service';
Page({
  source: '', //进入页面的来源
  data: {
    value: '111111222222'
  },

  onLoad: function (query) {
    console.log('index', systemInfoService);
    
  },
  onShow() {
 
  },
  onChange(e) {
    
    this.setData({
      value: e.detail
    })
    this.setData({
      value: e.detail
    })
    console.log(this.data.value);
  },
  onTap() {
    console.log('点击图标------------');
    
  },
  onBottomTap() {
    console.log('点击底部------------');
  }

  

})
