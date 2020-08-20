//index.js
import indexLogic from './indexLogic.js';
import systemInfoService from '../../services/System.service';
Page({
  source: '', //进入页面的来源
  data: {
    value: '111111222222'
  },

  onLoad: async function (query) {
    // this.fetchName();
    console.log(new Date())
    this.fetchName();
    // await this.fetchId();
    // console.log(new Date())
    // this.fetchId2();
    console.log(new Date())
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
  },
  async fetchName() {
    console.log('fetchName')
    const res = await this.fetchId()
    const res2 = await this.fetchId2()
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('fetchName', new Date());
    //     resolve();
    //   }, 2000);
    // })
  },
  fetchId() {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        // console.log('fetchId', new Date());
        resolve();
      }, 2000);
    })
  },
  fetchId2() {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        // console.log('fetchId', new Date());
        resolve();
      }, 2000);
    })
  },
  

})
