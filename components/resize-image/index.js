// components/resize-image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    resizeview() {
      var query = this.createSelectorQuery();
      query.select("#resize-image").boundingClientRect();
      query.exec((res) => {
        this.setData({
          imageheight: parseInt(res[0].height), //抛弃小数部分
        });
      });

    },
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      
    },
    moved: function () {},
    detached: function () {},
  },
});
