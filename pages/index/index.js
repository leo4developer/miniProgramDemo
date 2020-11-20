//index.js
import indexLogic from './indexLogic.js';
import systemInfoService from '../../services/System.service';
Page({
  source: '', //进入页面的来源
  data: {
    list: [
      {title: 1111},
      {title: 2222},
      {title: 1111},
      {title: 1111},
      {title: 1111},
      {title: 1111},
      {title: 1111}
    ]
  },
  
  onLoad: async function (query) {
    const memberId = wx.getStorageSync('tempMemberId')
    console.log('-------------', memberId)
  },
  onShow() {
 
  },
  onChange(e) {
    e.detail.milliseconds = parseInt(e.detail.milliseconds / 100);
    this.setData({
      timeData: e.detail,
    });
  },
  onTapMove() {

  },
  onTap() {
    console.log('点击图标------------');
    
  },
  onBottomTap() {
    console.log('点击底部------------');
  },
  


 

})
