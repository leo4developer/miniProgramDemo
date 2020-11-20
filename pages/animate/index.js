// pages/animate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['1', '2', '3'],
    expand: true
  },
  wrapH: 0,
  itemH: 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query = wx.createSelectorQuery();
      query.select('#wrap').boundingClientRect()
      query.select('#item1').boundingClientRect()
      query.exec((rect)=>{
        console.log(rect);
        this.wrapH = rect[0].height;
        this.itemH = rect[1].height;
        //这里必须给执行动画的view设置高度，否则第一次执行动画没效果
        this.setData({wrapH: this.wrapH});
      });
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

  },
  expand() {
    let height;
    
    if (this.data.expand) {
      height = this.itemH;
    } else {
      height = this.wrapH;
    }
    const animation = wx.createAnimation({
      timingFunction: 'ease',
      duration:500,
      // transformOrigin: '0 0 0',
      // delay: 1000
    });
    animation.height(height);
    animation.step();
    const aaa = animation.export()
    this.setData({
      animation: aaa,
      expand: !this.data.expand
    });
  }
})