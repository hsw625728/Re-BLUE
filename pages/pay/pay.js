/**
 * 支付相关服务
 */

var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    orderId: 0,
    actualPrice: 0.00
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      orderId: options.orderId,
      actualPrice: options.actualPrice
    })
  },
  onReady: function () {

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

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
  //向服务请求支付参数
  requestPayParam(event) {
    let that = this;
    //util.request(api.PayPrepayId, { orderId: that.data.orderId, payType: 1 }).then(function (res) {
    console.log("1pay.js requestPayParam() orderId = " + event.target.dataset.orderId);
    util.request(api.PayPrepayId, { orderId: event.target.dataset.orderId, payType: 1 }).then(function (res) {
      console.log("2pay.js requestPayParam() orderId = " + event.target.dataset.orderId);
      console.log(res);
      if (res.errno === 0) {
        let payParam = res.data;
        console.log(payParam);
        wx.requestPayment({
          'timeStamp': payParam.timeStamp,
          'nonceStr': payParam.timeStamp,
          'package': payParam.nonceStr,
          'signType': payParam.signType,
          'paySign': payParam.paySign,
          'success': function (res) {
            wx.redirectTo({
              url: '/pages/payResult/payResult?status=true',
            })
          },
          'fail': function (res) {
            wx.redirectTo({
              url: '/pages/payResult/payResult?status=false',
            })
          }
        })
      }
    });
  },
  startPay(event) {
    this.requestPayParam(event);
  }
})

