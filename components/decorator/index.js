// components/decorator/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    wrapped: {
      type: Boolean,
      value: true
    },
    title: {
      type: Object,
      value: {
        text: '已抢光',
        color: 'white',
        fontSize: '26rpx'
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
