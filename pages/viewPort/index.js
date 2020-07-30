// pages/viewPort/index.js
// 视图是否在可视区域demo
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onPageScroll(e) {
    // 屏幕的高度
    const SystemInfo = wx.getSystemInfoSync();
    const windowHeight = SystemInfo.windowHeight;
    const query = wx.createSelectorQuery();
    query.select('#red-item').boundingClientRect();
    query.exec(function(res) {
      const height = res[0].height;
      const top = res[0].top; // #the-id节点的上边界坐标
      if (top < windowHeight && top + height > 0) {
        console.log('在范围内', res[0].top);
        // 在范围内
      }
      
    });
    // debounce(async () => {
    //   this.setData({
    //     scrollTop: e.scrollTop
    //   });
    // }, 500)();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const topList = [];
    for (let index = 0; index < 10; index++) {
      const element = 10;
      topList.push(element);
    }
    const bottomList = [];
    for (let index = 0; index < 20; index++) {
      const element = 10;
      bottomList.push(element);
    }
    this.setData({topList, bottomList})
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

  }
})