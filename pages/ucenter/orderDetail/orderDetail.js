var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

Page({
  data: {
    orderId: 0,
    orderInfo: {},
    orderGoods: [],
    handleOption: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      orderId: options.id
    });
    this.getOrderDetail();
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
  getOrderDetail() {
    let that = this;
    util.request(api.OrderDetail, {
      orderId: that.data.orderId
    }).then(function (res) {
      if (res.errno === 0) {
        console.log(res.data);
        that.setData({
          orderInfo: res.data.orderInfo,
          orderGoods: res.data.orderGoods,
          handleOption: res.data.handleOption
        });
        //that.payTimer();
      }
    });
  },
  payTimer() {
    let that = this;
    let orderInfo = that.data.orderInfo;

    setInterval(() => {
      console.log(orderInfo);
      orderInfo.add_time -= 1;
      that.setData({
        orderInfo: orderInfo,
      });
    }, 1000);
  },
  payOrder(event) {
    let id = event.target.dataset.orderId;
    let price = event.target.dataset.actualPrice;
    wx.redirectTo({
      url: '/pages/pay/pay?orderId=' + id + '&actualPrice=' + price,
    })
    /*
    let that = this;
    console.log(that.data);
    util.request(api.PayPrepayId, { orderId: that.data.orderId || 15 }).then(function (res) {
      console.log("orderDetail.js payOrder() "+res.data);
      if (res.errno === 0) {
        const payParam = res.data;
        wx.requestPayment({
          'timeStamp': payParam.timeStamp,
          'nonceStr': payParam.nonceStr,
          'package': payParam.package,
          'signType': payParam.signType,
          'paySign': payParam.paySign,
          'success': function (res) {
            console.log(res)
          },
          'fail': function (res) {
            console.log(res)
          }
        });
      }
    });
*/
  },
  cancelOrder: function(event) {
    let id = event.target.dataset.orderId;
    console.log('取消订单（'+id+")");
    wx.showModal({
      title: '提示信息',
      content: '要取消此订单？',
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          console.log('取消订单（' + id + ")");
          util.request(api.OrderCancel, { orderId: id }, 'POST').then(function (res) {
            console.log('res=（' + res.status + ")");
          });
          console.log('取消订单（' + id + ")");
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})