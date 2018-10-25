var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var app = getApp();

Page({
  data: {
    orderId: 1,
    expressInfo: {},
    expressTraces: []
  },
  onLoad: function (options) {
    this.setData({
      orderId: options.id
    });
    this.getExpressInfo();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示

  },
  onPullDownRefresh: function () {
    /* 以后可能用得到
    // 动态设置导航条标题
    wx.setNavigationBarTitle({
      title: ''
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标

    wx.hideNavigationBarLoading();                   //完成停止加载
    // 动态设置导航条标题
    wx.setNavigationBarTitle({
      title: '我的'
    });
    */

    //this.controller.onRefresh();


    wx.stopPullDownRefresh();


  },
  getExpressInfo() {
    let that = this;
    util.request(api.OrderExpress, { orderId: that.data.orderId }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          expressInfo: res.data,
          expressTraces: res.data.traces
        });
      }
    });
  },
  updateExpress() {
    this.getExpressInfo();
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})