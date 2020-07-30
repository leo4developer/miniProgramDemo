import DeveloperObserver from './DeveloperObserver';
import PrdPublisher from './PrdPublisher';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 创建订阅者：前端开发李雷
    const liLei = new DeveloperObserver()
    // 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
    const A = new DeveloperObserver()
    // 创建订阅者：测试同学小B
    const B = new DeveloperObserver()
    // 韩梅梅出现了
    const hanMeiMei = new PrdPublisher()
    // 需求文档出现了
    const prd = {
        // 具体的需求内容
        
    };
    // 韩梅梅开始拉群
    hanMeiMei.add(liLei)
    hanMeiMei.add(A)
    hanMeiMei.add(B)
    // 韩梅梅发送了需求文档，并@了所有人
    hanMeiMei.setState(prd)
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