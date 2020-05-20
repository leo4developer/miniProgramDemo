// components/user.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  a: 123,
  /**
   * 组件的初始数据
   */
  data: {
    nickname: ''
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    jump(){
      wx.navigateTo({
        url: '/pages/logs/logs',
      })
    }
  }
})
