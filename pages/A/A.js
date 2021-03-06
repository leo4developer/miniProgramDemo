import indexLogic from '../index/indexLogic.js'
import SystemInfoService from '../../services/System.service.js'
import user from '../../services/User';
// pages/A/A.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'myname'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const systemInfoService = SystemInfoService.getInstance();
    const promise = systemInfoService.getSystemInfoPromise();
    promise.then(res=>{
      console.log(res);
      
    });
    setTimeout(this.logName, 2000);
    
  },
  logName() {
    console.log(this.data.name);
    
  },
  onClick(e) {
    console.log('点击了红色视图的子视图', e);
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(user);
    user.name = '222';
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onJump() {
    wx.navigateTo({
      url: '../B/B?source=A',
    })
  }
})